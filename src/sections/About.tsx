// src/sections/About.tsx
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-bold text-blue-400 mb-3">Summary</h2>
            <p className="text-gray-200 leading-relaxed">
              Senior Full Stack Developer with 2 years of hands‑on experience architecting high‑performance microservices on cloud‑native platforms. 
              I drive end‑to‑end SDLC, production hardening, CI/CD automation, and collaborative Agile delivery.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
