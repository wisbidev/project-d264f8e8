"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const techStack = [
  {
    name: "Next.js",
    url: "https://nextjs.org",
  },
  {
    name: "Go",
    url: "https://go.dev",
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
  },
  {
    name: "GitHub Actions",
    url: "https://github.com/features/actions",
  },
  {
    name: "Docker",
    url: "https://www.docker.com",
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="py-20 sm:py-28 bg-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card/20 to-dark" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4"
        >
          <span className="text-white">Stack hiện đại, </span>
          <span className="text-primary">sẵn sàng production</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-center text-lg mb-16 max-w-2xl mx-auto"
        >
          Công nghệ tiên tiến đảm bảo hiệu suất, độ tin cậy và khả năng mở rộng
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {techStack.map((tech, index) => (
            <motion.a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              className="group inline-flex items-center gap-3 px-5 py-3 bg-dark-card border border-dark-border rounded-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            >
              <Globe className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-base font-medium text-slate-200 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
