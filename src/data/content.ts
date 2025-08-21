// src/data/content.ts
export const exp = [
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
  
  export const projects = [
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
  
  export const skills = [
    {
      h: "Back‑end & Messaging",
      items: [
        "Java 8–17", "Spring Boot/Cloud", "Hibernate/JPA",
        "Kafka (Streams/Connect)", "RabbitMQ", "ActiveMQ",
        "REST & GraphQL", "gRPC",
      ],
    },
    { h: "Front‑end", items: ["React", "Redux", "TypeScript", "Tailwind", "HTML/CSS", "Bootstrap"] },
    { h: "Datastores", items: ["MySQL", "PostgreSQL", "MongoDB", "Elasticsearch", "Redis"] },
    { h: "Cloud & DevOps", items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
    { h: "Security", items: ["OAuth2/OIDC", "JWT", "mTLS", "Spring Security", "Swagger/OpenAPI"] },
    { h: "Observability & QA", items: ["ELK", "Prometheus", "Grafana", "JUnit", "Mockito", "Postman"] },
  ];
  