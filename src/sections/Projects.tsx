// src/sections/Projects.tsx
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";
import { projects } from "../data/content";
import TechBadge from "../components/TechBadge";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
      <motion.h2 className="text-2xl font-bold text-blue-400 mb-6" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card className="hover:shadow-blue-600/20 hover:shadow-md transition-shadow">
              <CardContent>
                <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-gray-200 leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t: string) => <TechBadge key={t} label={t} />)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
