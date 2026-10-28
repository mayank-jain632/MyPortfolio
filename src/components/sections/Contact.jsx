import { useEffect, useRef, useState } from "react";
import { about, hasResume, hero, site } from "../../data/site.config";
import { Reveal } from "../fx/Reveal";
import { SplitText } from "../fx/SplitText";
import { Button, ButtonLink, TextLink } from "../ui/Button";

const CONTACT_LINE =
  "Happy to talk about roles, my projects, or how any of it was built. Email is the fastest way to reach me.";

function CopyEmail() {
  const [state, setState] = useState("idle");
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2600);
  };

  return (
    <>
      <Button variant="ghost" size="lg" onClick={copy}>
        {state === "copied" ? (
          <>
            <svg aria-hidden="true" viewBox="0 0 12 12" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 6.5l2.2 2.2 4.8-5" />
            </svg>
            Copied
          </>
        ) : (
          "Copy email"
        )}
      </Button>
      <p className="sr-only" role="status">
        {state === "copied" ? "Email address copied." : state === "failed" ? `Copy failed. The address is ${site.email}.` : ""}
      </p>
      {state === "failed" && <p className="w-full text-sm text-fg-muted">Copy failed. The address is {site.email}.</p>}
    </>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-section">
      <div className="container-page flex flex-col items-center text-center">
        <h2 id="contact-title" className="max-w-[12ch] text-display font-semibold text-fg">
          <SplitText text="Let's talk." stagger={0.07} />
        </h2>
        <Reveal delay={0.2} className="flex flex-col items-center">
          <p className="mt-8 max-w-[36rem] text-balance text-lead text-fg-muted">{CONTACT_LINE}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </ButtonLink>
            <CopyEmail />
          </div>
          <p className="mt-8 flex gap-x-8 text-lead">
            <TextLink href={site.links.github} external>
              GitHub
            </TextLink>
            <TextLink href={site.links.linkedin} external>
              LinkedIn
            </TextLink>
            {hasResume && (
              <TextLink href={site.links.resume} download>
                Resume
              </TextLink>
            )}
          </p>
        </Reveal>

        <Reveal className="mt-section max-w-[40rem] border-t border-hairline pt-8 text-base text-fg-subtle">
          <p className="text-balance">{about.summary}</p>
          <p className="mt-2 text-balance">{about.details.join(" ")}</p>
        </Reveal>
      </div>
    </section>
  );
}
