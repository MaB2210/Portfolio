// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp } from "../animations/motion";

export default function Hero() {
  return (
    <section id="home" className="max-w-6xl mx-auto px-4 pt-16 pb-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: headline & cta */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
          <p className="text-sm uppercase tracking-widest text-blue-300/80">
            Senior Full Stack Developer
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Building scalable, secure <span className="text-blue-400">microservices</span> & delightful UIs
          </h1>
          <p className="text-gray-300 max-w-xl">
            Java • Spring Boot • Kafka • React • Kubernetes • AWS
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 font-semibold"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-4 py-2"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right: intentionally minimal / empty space to avoid clutter */}
        <div className="hidden md:block">
          {/* Keep a subtle, static placeholder to balance the layout (no animation). 
              Remove the inner div entirely if you want *pure* empty space. */}
          {/* <div className="aspect-square rounded-3xl border border-gray-800/70 bg-gradient-to-br from-gray-950 via-black to-gray-900" /> */}
        </div>
      </div>
    </section>
  );
}
