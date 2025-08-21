import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/content";

type ProjectItem = {
  title: string;
  desc: string;
  tags?: string[];
  // optional fields if you have them in your data
  repo?: string;   // e.g. "https://github.com/MaB2210/my-project"
  live?: string;   // e.g. "https://myapp.vercel.app"
  images?: string[]; // e.g. ["/shots/p1-1.png", "/shots/p1-2.png"]
};

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
      <motion.h2
        className="text-2xl font-bold text-blue-400 mb-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="space-y-4">
        {(projects as ProjectItem[]).map((p, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative"
            >
              <Card>
                {/* Header (click to expand) */}
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left"
                  aria-expanded={isOpen}
                  aria-controls={`proj-panel-${idx}`}
                >
                  <CardContent className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-white truncate">
                        {p.title}
                      </h3>
                      {/* quick tags row (collapsed view) */}
                      {p.tags?.length ? (
                        <div className="mt-1 flex flex-wrap gap-2">
                          {p.tags.slice(0, 5).map((t) => (
                            <span
                              key={t}
                              className="text-[11px] bg-gray-900/70 border border-gray-700 rounded-full px-2.5 py-0.5 text-gray-200"
                            >
                              {t}
                            </span>
                          ))}
                          {p.tags.length > 5 ? (
                            <span className="text-[11px] text-gray-400">
                              +{p.tags.length - 5} more
                            </span>
                          ) : null}
                        </div>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-3">
                      {/* optional quick links visible even when collapsed */}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-blue-300 hover:text-white"
                          aria-label="Live demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-blue-300 hover:text-white"
                          aria-label="GitHub repo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={18} />
                        </a>
                      )}
                      <ChevronDown
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </CardContent>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`proj-panel-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 space-y-4">
                        <p className="text-gray-200 leading-relaxed">{p.desc}</p>

                        {p.tags?.length ? (
                          <div className="flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                              <span
                                key={t}
                                className="text-xs bg-gray-900/70 border border-gray-700 rounded-full px-3 py-1 text-gray-200"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}

                        {/* Optional image strip (if you add p.images) */}
                        {p.images?.length ? (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {p.images.map((src) => (
                              <div
                                key={src}
                                className="rounded-xl overflow-hidden border border-gray-800 bg-gray-900/40"
                              >
                                <img
                                  src={src}
                                  alt={`${p.title} screenshot`}
                                  className="w-full h-32 object-cover"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        ) : null}

                        {/* Optional detailed links */}
                        <div className="flex gap-3 pt-1">
                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-3 py-1.5 text-sm"
                            >
                              <ExternalLink size={16} /> Live Demo
                            </a>
                          )}
                          {p.repo && (
                            <a
                              href={p.repo}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-3 py-1.5 text-sm"
                            >
                              <Github size={16} /> Source
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
