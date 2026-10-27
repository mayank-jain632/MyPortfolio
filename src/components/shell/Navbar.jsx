import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { hero, navigation, site } from "../../data/site.config";
import { useActiveSection, useElementInView } from "../../hooks/useActiveSection";
import { DURATION, EASE } from "../../lib/motion";
import { ButtonLink } from "../ui/Button";

const SECTION_IDS = navigation.map((item) => item.id);

function MenuIcon({ isOpen }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d={isOpen ? "M4 4l10 10" : "M2 6h14"} className="transition-all duration-base ease-out-quart" />
      <path d={isOpen ? "M14 4L4 14" : "M2 12h14"} className="transition-all duration-base ease-out-quart" />
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstLinkRef = useRef(null);
  const isHeroVisible = useElementInView("hero");
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* The blur lives on its own layer: backdrop-filter on the header would trap the fixed mobile menu inside it. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-12 border-b border-hairline bg-black/70 backdrop-blur-xl backdrop-saturate-150" />
      <nav aria-label="Main" className="container-page relative flex h-12 items-center justify-between gap-6">
        <a href="#hero" className="text-sm font-semibold text-fg" onClick={closeMenu}>
          {site.name}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative block px-3 py-3.5 text-[0.8125rem] transition-colors duration-fast ${
                    isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 420, damping: 36 }}
                      className="absolute inset-x-3 bottom-0 h-px bg-fg"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <AnimatePresence initial={false}>
            {!isHeroVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: DURATION.base, ease: EASE.outQuart }}
              >
                <ButtonLink size="sm" href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </ButtonLink>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-2 flex size-10 items-center justify-center rounded-pill text-fg md:hidden"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: DURATION.base }}
            className="fixed inset-x-0 bottom-0 top-12 bg-black md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
              className="container-page flex flex-col pt-6"
            >
              {navigation.map((item, index) => (
                <motion.li
                  key={item.id}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: DURATION.slow, ease: EASE.outExpo }}
                  className="border-b border-hairline"
                >
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="block py-4 text-title font-semibold text-fg"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
