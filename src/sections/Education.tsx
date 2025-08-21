// src/sections/Education.tsx
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-10">
      <motion.h2 className="text-2xl font-bold text-blue-400 mb-6" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        Education
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h3 className="text-lg font-bold text-white">Post‑Graduation in Information Technologies Solutions</h3>
            <p className="text-gray-300">Humber College, Toronto</p>
            <p className="text-sm text-gray-400">May 2022 – Dec 2023</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-bold text-white">B.Sc. in Information Technology</h3>
            <p className="text-gray-300">GLS University, India</p>
            <p className="text-sm text-gray-400">Jun 2018 – Apr 2021</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
