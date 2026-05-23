"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    name: "Next.js",
    url: "https://nextjs.org",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="none">
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
          fill="#3B82F6"
          fillOpacity="0.15"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
          fill="none"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="15"
          textAnchor="middle"
          fill="#3B82F6"
          fontSize="9"
          fontWeight="bold"
        >
          N
        </text>
      </svg>
    ),
  },
  {
    name: "Go",
    url: "https://go.dev",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="#3B82F6"
          fillOpacity="0.15"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fill="#3B82F6"
          fontSize="11"
          fontWeight="bold"
        >
          Go
        </text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 3c-1.5 0-3 1-3 3v3H7a2 2 0 00-2 2v2h14v-2a2 2 0 00-2-2h-2V6c0-2-1.5-3-3-3z"
          fill="#3B82F6"
          fillOpacity="0.15"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <path
          d="M10 14v4M14 14v4"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M6 9c0-3 2-5 6-5 4 0 5 2.5 7 3 2 0 3-1 4-1-1 3-2 5-6 5-4 0-5-2.5-7-3-2 0-3 1-4 1z"
          fill="#3B82F6"
          fillOpacity="0.15"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M2 15c1-3 3-4 6-4 3 0 4 1.5 5 2 2 0 3-1 4-1-1 2-3 4-6 4-3 0-4-1.5-5-2-2 0-3 1-4 1z"
          fill="#3B82F6"
          fillOpacity="0.15"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "GitHub Actions",
    url: "https://github.com/features/actions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
          fill="#3B82F6"
          fillOpacity="0.15"
          stroke="#3B82F6"
          strokeWidth="1.5"
        />
        <path
          d="M8 12l2 2 4-4"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 16v-8"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    url: "https://www.docker.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect
          x="4"
          y="12"
          width="3"
          height="4"
          rx="0.5"
          fill="#3B82F6"
          fillOpacity="0.2"
          stroke="#3B82F6"
          strokeWidth="1"
        />
        <rect
          x="8"
          y="12"
          width="3"
          height="4"
          rx="0.5"
          fill="#3B82F6"
          fillOpacity="0.2"
          stroke="#3B82F6"
          strokeWidth="1"
        />
        <rect
          x="12"
          y="12"
          width="3"
          height="4"
          rx="0.5"
          fill="#3B82F6"
          fillOpacity="0.2"
          stroke="#3B82F6"
          strokeWidth="1"
        />
        <rect
          x="12"
          y="7"
          width="3"
          height="4"
          rx="0.5"
          fill="#3B82F6"
          fillOpacity="0.2"
          stroke="#3B82F6"
          strokeWidth="1"
        />
        <rect
          x="16"
          y="12"
          width="3"
          height="4"
          rx="0.5"
          fill="#3B82F6"
          fillOpacity="0.2"
          stroke="#3B82F6"
          strokeWidth="1"
        />
        <path
          d="M3 16h18v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1z"
          fill="#3B82F6"
          fillOpacity="0.1"
          stroke="#3B82F6"
          strokeWidth="1"
        />
      </svg>
    ),
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
              <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                {tech.icon}
              </span>
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
