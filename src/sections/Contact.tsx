// src/sections/Contact.tsx
import { Card, CardContent } from "../components/ui/Card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <Card>
        <CardContent className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-2">Let’s build something</h2>
            <p className="text-gray-200">Open to full‑time roles and impactful projects in microservices, data, and fintech.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:connect.mannbhatt@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 font-semibold"><Mail size={18}/> Email</a>
            <a href="tel:+19057816272" className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-4 py-2"><Phone size={18}/> Call</a>
            <a href="https://github.com/MaB2210" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-4 py-2"><Github size={18}/> GitHub</a>
            <a href="https://www.linkedin.com/in/mannbhatt/" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-4 py-2"><Linkedin size={18}/> LinkedIn</a>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
