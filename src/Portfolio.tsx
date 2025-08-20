import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowRight, Download } from "lucide-react";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

// Simple Card component (no external UI lib)
function Card({ className = "", children }:CardProps) {
  return (
    <div className={`rounded-2xl bg-gray-800/80 border border-gray-700 shadow-sm ${className}`}>{children}</div>
  );
}
function CardContent({ className = "", children }:CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Portfolio() {
  const exp = [
    {
      company: "Reactive Stax — Mississauga, CA",
      role: "Senior Full Stack Developer",
      time: "Aug 2024 – Present",
      bullets: [
        "Architected Spring Boot microservices with Kafka Streams & CDC.",
        "Designed REST & gRPC APIs with OpenAPI/Swagger.",
        "Automated CI/CD with Jenkins & GitHub Actions.",
        "Implemented centralized logging and proactive monitoring using ELK and Prometheus/Grafana.",
      ],
    },
    {
      company: "Shyamsir.com — Toronto, CA",
      role: "Senior Software Developer",
      time: "Jan 2024 – Jul 2024",
      bullets: [
        "Delivered account‑management microservices with improved scalability.",
        "Optimized MySQL & JPA mappings for large datasets.",
        "JWT‑secured React UI with Redux & Tailwind.",
      ],
    },
    {
      company: "KnowQuest — Toronto, CA",
      role: "Full Stack Developer (Intern)",
      time: "Sep 2024 – Dec 2024",
      bullets: [
        "Built Node/Express Lambdas with <200ms cold starts.",
        "React dashboards; page load –25% via code‑splitting & caching.",
      ],
    },
    {
      company: "Shyamsir.com — Gujarat, India",
      role: "Software Engineer",
      time: "May 2021 – Apr 2022",
      bullets: [
        "Spring MVC apps backed by MySQL & Hibernate/JPA.",
        "REST endpoints for order flows with standardized errors.",
      ],
    },
  ];

  const projects = [
    {
      title: "Recreational Center Management",
      tags: ["React", "Spring Boot", "RBAC", "mTLS", "Redis", "K8s", "Grafana"],
      desc:
        "RBAC React frontend integrated with Spring Security API. Two‑Way SSL everywhere, Redis cart for sub‑ms latency, zero‑downtime rollouts on Kubernetes.",
    },
    {
      title: "Trade Processing System",
      tags: ["React", "Spring Boot", "mTLS", "Redis", "Kubernetes", "Cypress"],
      desc:
        "Secure full‑stack trade flows; caching, orchestration, dashboards, and end‑to‑end tests with Cypress.",
    },
  ];

  const skills = [
    {
      h: "Back‑end & Messaging",
      items: [
        "Java 8–17", "Spring Boot/Cloud", "Hibernate/JPA",
        "Kafka (Streams/Connect)", "RabbitMQ", "ActiveMQ",
        "REST & GraphQL", "gRPC",
      ],
    },
    {
      h: "Front‑end",
      items: ["React", "Redux", "TypeScript", "Tailwind", "HTML/CSS", "Bootstrap"],
    },
    {
      h: "Datastores",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis"],
    },
    {
      h: "Cloud & DevOps",
      items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    },
    {
      h: "Security",
      items: ["OAuth2/OIDC", "JWT", "mTLS", "Spring Security", "Swagger/OpenAPI"],
    },
    {
      h: "Observability & QA",
      items: ["ELK", "Prometheus", "Grafana", "JUnit", "Mockito", "Postman"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100">
      {/* subtle tech grid background */}
      <div className={`pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.12)_1px,transparent_1px)] [background-size:24px_24px] opacity-40`} />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-extrabold tracking-wide text-blue-400">MANN BHATT</a>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#education", label: "Education" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-blue-400">
            <a href="mailto:connect.mannbhatt@gmail.com" className="hover:text-white" aria-label="Email"><Mail size={20} /></a>
            <a href="tel:+19057816272" className="hover:text-white" aria-label="Phone"><Phone size={20} /></a>
            <a href="https://github.com/MaB2210" target="_blank" rel="noreferrer noopener" className="hover:text-white" aria-label="GitHub"><Github size={20} /></a>
            <a href="https://linkedin.com/in/mann-bhatt" target="_blank" rel="noreferrer noopener" className="hover:text-white" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-blue-300/80">Senior Full Stack Developer</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Building scalable, secure <span className="text-blue-400">microservices</span> & delightful UIs
            </h1>
            <p className="text-gray-300 max-w-xl">Java • Spring Boot • Kafka • React • Kubernetes • AWS</p>
            <div className="flex gap-3 pt-2">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 font-semibold">View Projects <ArrowRight size={18} /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-4 py-2">Contact Me</a>
            </div>
            {/* quick stats */}
            <div className="grid grid-cols-3 gap-3 pt-6">
              {[
                { k: "Years", v: "2+" },
                { k: "Projects", v: "6+" },
                { k: "Teams Led", v: "3" },
              ].map((s) => (
                <Card key={s.k}>
                  <CardContent className="py-4 text-center">
                    <div className="text-2xl font-extrabold text-blue-400">{s.v}</div>
                    <div className="text-xs text-gray-400">{s.k}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* decorative panel */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-600/20 via-blue-400/10 to-transparent border border-blue-400/30 shadow-[0_0_80px_-10px_rgba(37,99,235,0.35)]" />
          </motion.div>
        </div>
      </section>

      {/* ABOUT / SUMMARY */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold text-blue-400 mb-3">Summary</h2>
              <p className="text-gray-200 leading-relaxed">
                Senior Full Stack Developer with 2 years of hands‑on experience architecting high‑performance microservices on cloud‑native platforms. I drive end‑to‑end SDLC, production hardening, CI/CD automation, and collaborative Agile delivery.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
        <motion.h2 className="text-2xl font-bold text-blue-400 mb-4" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Skills</motion.h2>
        <div className="grid md:grid-cols-3 gap-5">
          {skills.map((group) => (
            <motion.div key={group.h} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card>
                <CardContent>
                  <h3 className="font-semibold mb-3 text-white">{group.h}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((t) => (
                      <span key={t} className="text-xs bg-gray-900/70 border border-gray-700 rounded-full px-3 py-1 text-gray-200">{t}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE (with filled right sidebar) */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
        <motion.h2 className="text-2xl font-bold text-blue-400 mb-6" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Experience</motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Timeline (left 2 cols) */}
          <div className="md:col-span-2">
            <div className="relative">
              <span className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600/70 to-blue-400/30 rounded-full" />
              <div className="space-y-6">
                {exp.map((e, i) => (
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
                          {e.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar (fills empty space) */}
          <aside className="md:col-span-1">
            <div className="md:sticky md:top-24 space-y-6">
              <Card className="overflow-hidden">
                <CardContent>
                  <h3 className="text-sm font-semibold text-blue-300 mb-3">Core Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Spring Boot", "Kafka", "React", "Kubernetes", "AWS"].map((t) => (
                      <span key={t} className="text-xs bg-gray-900/70 border border-gray-700 rounded-full px-3 py-1 text-gray-200">{t}</span>
                    ))}
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

              <Card>
                <CardContent>
                  <h3 className="text-sm font-semibold text-blue-300 mb-3">Download Résumé</h3>
                  <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-3 py-2 text-sm font-semibold">
                    <Download size={16} /> PDF
                  </a>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
        <motion.h2 className="text-2xl font-bold text-blue-400 mb-6" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Projects</motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <Card className="hover:shadow-blue-600/20 hover:shadow-md transition-shadow">
                <CardContent>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-200 leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs bg-gray-900/70 border border-gray-700 rounded-full px-3 py-1 text-gray-200">{t}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-6xl mx-auto px-4 py-10">
        <motion.h2 className="text-2xl font-bold text-blue-400 mb-6" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>Education</motion.h2>
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

      {/* CONTACT */}
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
              <a href="https://linkedin.com/in/mann-bhatt" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-xl border border-gray-700 hover:border-gray-600 px-4 py-2"><Linkedin size={18}/> LinkedIn</a>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="px-4 py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">© 2025 Mann Bhatt • Built with React, Tailwind & Framer Motion</div>
      </footer>
    </div>
  );
}
