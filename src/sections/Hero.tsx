// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";

export default function Hero() {
  const stats = [
    { k: "Years", v: "2+" },
    { k: "Projects", v: "6+" },
    { k: "Teams Led", v: "3" },
  ];
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 pt-16 pb-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-blue-300/80">Senior Full Stack Developer</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Building scalable, secure <span className="text-blue-400">microservices</span> & delightful UIs
          </h1>
          <p className="text-gray-300 max-w-xl">Java • Spring Boot • Kafka • React • Kubernetes • AWS</p>
          <div className="flex gap-3 pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 font-semibold">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-4 py-2">
              Contact Me
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-6">
            {stats.map((s) => (
              <Card key={s.k}><CardContent className="py-4 text-center">
                <div className="text-2xl font-extrabold text-blue-400">{s.v}</div>
                <div className="text-xs text-gray-400">{s.k}</div>
              </CardContent></Card>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-600/20 via-blue-400/10 to-transparent border border-blue-400/30 shadow-[0_0_80px_-10px_rgba(37,99,235,0.35)]" />
        </motion.div>
      </div>
    </section>
  );
}
