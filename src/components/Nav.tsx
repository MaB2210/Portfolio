// src/components/Nav.tsx
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/40 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-extrabold tracking-wide text-blue-400">MANN BHATT</a>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          {[
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#education", label: "Education" },
            { href: "#contact", label: "Contact" },
          ].map(link => (
            <a key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-blue-400">
          <a href="mailto:connect.mannbhatt@gmail.com" className="hover:text-white" aria-label="Email"><Mail size={20} /></a>
          <a href="tel:+19057816272" className="hover:text-white" aria-label="Phone"><Phone size={20} /></a>
          <a href="https://github.com/MaB2210" target="_blank" rel="noreferrer noopener" className="hover:text-white" aria-label="GitHub"><Github size={20} /></a>
          <a href="https://linkedin.com/in/mannbhatt" target="_blank" rel="noreferrer noopener" className="hover:text-white" aria-label="LinkedIn"><Linkedin size={20} /></a>
        </div>
      </div>
    </header>
  );
}
