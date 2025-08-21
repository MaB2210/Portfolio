// src/sections/About.tsx
import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";
import { Card, CardContent } from "../components/ui/Card";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-10">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        <Card>
          <CardContent>
            <h2 className="text-2xl font-bold text-blue-400 mb-3">Summary</h2>
            <p className="text-gray-200 leading-relaxed">
            I’m a Senior Full Stack Java Developer with 2+ years of experience building secure, scalable, and high-performance applications. My expertise spans Java, Spring Boot, Kafka, React.js, MongoDB, Elasticsearch, and cloud-native deployments on Kubernetes & AWS.
            <br/><br/>
I specialize in designing microservices architectures, implementing event-driven systems, and ensuring resilience and observability in production using CI/CD pipelines and modern monitoring tools.
<br/><br/>
With a strong background in capital markets, banking, and trading systems, I bring real-world experience in building low-latency, fault-tolerant, and data-driven platforms. I thrive at the intersection of backend, frontend, and cloud infrastructure, delivering end-to-end solutions that meet business and technical goals.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
