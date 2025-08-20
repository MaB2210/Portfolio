import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";

// Props typing
interface CardProps {
  className?: string;
  children: ReactNode;
}

// Simple Card component (no external UI lib)
function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-gray-800/80 border border-gray-700 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function CardContent({ className = "", children }: CardProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

const container = {
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
        "Delivered account-management microservices with improved scalability.",
        "Optimized MySQL & JPA mappings for large datasets.",
        "JWT-secured React UI with Redux & Tailwind.",
      ],
    },
    {
      company: "KnowQuest — Toronto, CA",
      role: "Full Stack Developer (Intern)",
      time: "Sep 2024 – Dec 2024",
      bullets: [
        "Built Node/Express Lambdas with <200ms cold starts.",
        "React dashboards; page load –25% via code-splitting & caching.",
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
        "RBAC React frontend integrated with Spring Security API. Two-Way SSL everywhere, Redis cart for sub-ms latency, zero-downtime rollouts on Kubernetes.",
    },
    {
      title: "Trade Processing System",
      tags: ["React", "Spring Boot", "mTLS", "Redis", "Kubernetes", "Cypress"],
      desc:
        "Secure full-stack trade flows; caching, orchestration, dashboards, and end-to-end tests with Cypress.",
    },
  ];

  const skills = [
    {
      h: "Back-end & Messaging",
      items: [
        "Java 8–17",
        "Spring Boot/Cloud",
        "Hibernate/JPA",
        "Kafka (Streams/Connect)",
        "RabbitMQ",
        "ActiveMQ",
        "REST & GraphQL",
        "gRPC",
      ],
    },
    {
      h: "Front-end",
      items: [
        "React",
        "Redux",
        "TypeScript",
        "Tailwind",
        "HTML/CSS",
        "Bootstrap",
      ],
    },
    {
      h: "Datastores",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis"],
    },
    {
      h: "Cloud & DevOps",
      items: [
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
      ],
    },
    {
      h: "Security",
      items: [
        "OAuth2/OIDC",
        "JWT",
        "mTLS",
        "Spring Security",
        "Swagger/OpenAPI",
      ],
    },
    {
      h: "Observability & QA",
      items: ["ELK", "Prometheus", "Grafana", "JUnit", "Mockito", "Postman"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100">
      {/* background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-extrabold tracking-wide text-blue-400"
          >
            MANN BHATT
          </a>
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              { href: "#education", label: "Education" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-blue-400">
            <a
              href="mailto:connect.mannbhatt@gmail.com"
              className="hover:text-white"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+19057816272"
              className="hover:text-white"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://github.com/MaB2210"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/mann-bhatt"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      {/* ... your Hero, About, Skills, Experience, Projects, Education, Contact, Footer sections stay the same ... */}
    </div>
  );
}
