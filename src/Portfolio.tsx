// src/Portfolio.tsx
import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100">
      {/* global subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <footer className="px-4 py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">🚀 Built with too much coffee, a keyboard, and a dream ✨</div>
      </footer>
    </div>
  );
}
