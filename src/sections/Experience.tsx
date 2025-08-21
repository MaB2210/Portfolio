// src/sections/Experience.tsx
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";
import { exp } from "../data/content";
import TechBadge from "../components/TechBadge";
import { Download } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
      <motion.h2 className="text-2xl font-bold text-blue-400 mb-6" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        Experience
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="md:col-span-2 relative">
          <span className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/70 to-blue-400/30 rounded-full" />
          <div className="space-y-6">
            {exp.map((e) => (
              <motion.div key={e.company} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative pl-10">
                <span className="absolute left-0 mt-3 h-4 w-4 rounded-full bg-blue-500 border-2 border-white/20 shadow-[0_0_0_4px_rgba(37,99,235,0.25)]" />
                <Card>
                  <CardContent>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-lg font-bold text-white">{e.role}</h3>
                      <span className="text-xs text-gray-400 whitespace-nowrap">{e.time}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{e.company}</p>
                    <ul className="list-disc list-inside mt-3 space-y-1 text-gray-200">
                      {e.bullets.map((b: string) => <li key={b}>{b}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="md:sticky md:top-24 space-y-6">
            <Card>
              <CardContent>
                <h3 className="text-sm font-semibold text-blue-300 mb-3">Core Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "Kafka", "React", "Kubernetes", "AWS"].map(t => <TechBadge key={t} label={t} />)}
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { k: "Microservices", v: 90 },
                    { k: "Cloud", v: 80 },
                    { k: "Frontend", v: 75 },
                  ].map((s) => (
                    <div key={s.k}>
                      <div className="flex justify-between text-xs text-gray-400"><span>{s.k}</span><span>{s.v}%</span></div>
                      <div className="h-2 bg-gray-900/60 rounded-full overflow-hidden mt-1">
                        <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <h3 className="text-sm font-semibold text-blue-300 mb-3">Practices</h3>
                <ul className="text-sm text-gray-200 space-y-2 list-disc list-inside">
                  <li>Agile/Scrum & code reviews</li>
                  <li>CI/CD with Jenkins & GitHub Actions</li>
                  <li>Security: OAuth2/OIDC, JWT, mTLS</li>
                  <li>Observability: ELK, Prometheus, Grafana</li>
                </ul>
              </CardContent>
            </Card>

            <a href="/Mann_Bhatt_Resume.pdf" target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-3 py-2 text-sm font-semibold">
              <Download size={16} /> Download Résumé
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
