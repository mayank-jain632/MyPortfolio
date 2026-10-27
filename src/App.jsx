import { MotionConfig } from "motion/react";
import { ScrollProgress } from "./components/fx/ScrollProgress";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Proof } from "./components/sections/Proof";
import { Specs } from "./components/sections/Specs";
import { Services } from "./components/sections/Services";
import { Work } from "./components/sections/Work";
import { Footer } from "./components/shell/Footer";
import { Navbar } from "./components/shell/Navbar";

export default function App() {
  return (
    // "user" makes every motion component honor prefers-reduced-motion.
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-accent-fill focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <Work />
        <Proof />
        <Experience />
        <Specs />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
