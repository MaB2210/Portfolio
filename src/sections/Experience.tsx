// src/sections/Experience.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";
import { exp } from "../data/content";
import { ChevronDown, Download } from "lucide-react";

type ExpItem = {
  company: string;
  role: string;
  time: string;
  bullets: string[];
};

export default function Experience() {
  // which item is expanded (null = none). Set to 0 to open the first by default.
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
      <motion.h2
        className="text-2xl font-bold text-blue-400 mb-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-4">
        {(exp as ExpItem[]).map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={item.company}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              <Card>
                {/* Header row (click to toggle) */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left"
                  aria-expanded={isOpen}
                  aria-controls={`exp-panel-${idx}`}
                >
                  <CardContent className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-white truncate">{item.role}</h3>
                        <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
                      </div>
                      <p className="text-sm text-gray-300 mt-1">{item.company}</p>
                    </div>
                    <ChevronDown
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </CardContent>
                </button>

                {/* Collapsible content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`exp-panel-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6">
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-200">
                          {item.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Resume CTA at the bottom (optional) */}
      <div className="mt-6">
      <a
        href="/Mann_Bhatt_Resume.pdf"
        download="Mann_Bhatt_Resume.pdf"
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-3 py-2 text-sm font-semibold"
      >
          <Download size={16} /> Download Résumé
        </a>
      </div>
    </section>
  );
}
