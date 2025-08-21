// src/sections/Skills.tsx
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";
import { skills } from "../data/content";
import TechBadge from "../components/TechBadge";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
      <motion.h2 className="text-2xl font-bold text-blue-400 mb-4" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        Skills
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-5">
        {skills.map((group) => (
          <motion.div key={group.h} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Card>
              <CardContent>
                <h3 className="font-semibold mb-3 text-white">{group.h}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((t: string) => <TechBadge key={t} label={t} />)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
