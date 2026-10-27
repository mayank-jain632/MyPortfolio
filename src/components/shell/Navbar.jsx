import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import avatar from "../../assets/avatar.jpg";
import { hero, navigation, site } from "../../data/site.config";
import { useActiveSection, useElementInView } from "../../hooks/useActiveSection";
import { DURATION, EASE } from "../../lib/motion";
import { Magnetic } from "../fx/Magnetic";
import { ButtonLink } from "../ui/Button";

const CONDENSE_AT_PX = 48;
const SECTION_IDS = navigation.map((item) => item.id);
const LAYOUT_TRANSITION = { duration: DURATION.slow, ease: EASE.outExpo };
const INDICATOR_SPRING = { type: "spring", stiffness: 380, damping: 32 };
const FADE_SCALE = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.92 },
  transition: { duration: DURATION.base, ease: EASE.outQuart },
};

function NavLinks({ activeId }) {
  return (
    <motion.ul layout="position" className="hidden items-center md:flex">
      {navigation.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={`relative isolate block rounded-pill px-3.5 py-2 text-sm transition-colors duration-fast ${
                isActive ? "text-fg" : "text-fg-subtle hover:text-fg"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  transition={INDICATOR_SPRING}
                  className="absolute inset-0 -z-10 rounded-pill border border-hairline bg-raised"
                >
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-3 -translate-x-1/2 rounded-pill bg-accent" />
                </motion.span>
              )}
              {item.label}
            </a>
          </li>
        );
      })}
    </motion.ul>
  );
}

function MenuIcon({ isOpen }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d={isOpen ? "M4 4l10 10" : "M3 6h12"}
        className="transition-all duration-base ease-out-quart"
        strokeLinecap="round"
      />
      <path
        d={isOpen ? "M14 4L4 14" : "M3 12h12"}
        className="transition-all duration-base ease-out-quart"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [isCondensed, setIsCondensed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const isHeroVisible = useElementInView("hero");
  const activeId = useActiveSection(SECTION_IDS);

  useMotionValueEvent(scrollY, "change", (y) => setIsCondensed(y > CONDENSE_AT_PX));

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex flex-col items-center px-gutter pt-3 sm:pt-4">
      <motion.nav
        layout
        transition={LAYOUT_TRANSITION}
        aria-label="Main"
        style={{ borderRadius: 9999 }}
        className={`pointer-events-auto flex items-center gap-1 border p-1.5 backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-base ease-out-quart ${
          isCondensed ? "border-hairline-strong bg-canvas/80 shadow-float" : "border-hairline bg-canvas/40"
        }`}
      >
        <motion.a
          layout="position"
          href="#hero"
          aria-label={`${site.name}, back to top`}
          className="flex items-center gap-2.5 rounded-pill py-0.5 pl-0.5 pr-2"
        >
          <img src={avatar} alt="" width="32" height="32" className="h-8 w-8 rounded-full object-cover" />
          <AnimatePresence initial={false} mode="popLayout">
            {!isCondensed && (
              <motion.span key="wordmark" {...FADE_SCALE} className="whitespace-nowrap text-sm font-semibold text-fg">
                {site.name}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>

        <NavLinks activeId={activeId} />

        <AnimatePresence initial={false} mode="popLayout">
          {!isHeroVisible && (
            <motion.div key="cta" layout="position" {...FADE_SCALE} className="ml-1">
              <Magnetic>
                <ButtonLink size="sm" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </ButtonLink>
              </Magnetic>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          layout="position"
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-pill text-fg transition-colors duration-fast hover:bg-fg/5 md:hidden"
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <MenuIcon isOpen={isMenuOpen} />
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: DURATION.base, ease: EASE.outQuart }}
            className="pointer-events-auto mt-2 w-full max-w-sm rounded-lg border border-hairline-strong bg-canvas/95 p-2 shadow-float backdrop-blur-xl md:hidden"
          >
            <ul>
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    aria-current={item.id === activeId ? "location" : undefined}
                    className="flex items-center justify-between rounded-md px-4 py-3 text-base text-fg-muted transition-colors duration-fast hover:bg-fg/5 hover:text-fg aria-[current=location]:text-fg"
                  >
                    {item.label}
                    {item.id === activeId && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-pill bg-accent" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
