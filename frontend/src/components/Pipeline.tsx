"use client";

import { motion } from "framer-motion";
import { FileText, Users, CheckCircle, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    label: "Mô tả dự án",
    description: "Gửi ý tưởng qua Telegram cho AI team",
  },
  {
    icon: Users,
    label: "PM phân tích",
    description: "AI PM phân tích yêu cầu và lên kế hoạch",
  },
  {
    icon: CheckCircle,
    label: "User duyệt",
    description: "Xem và phê duyệt kế hoạch chi tiết",
  },
  {
    icon: Cpu,
    label: "AI team build",
    description: "TL, Dev, TestLead tự động xây dựng",
  },
  {
    icon: Rocket,
    label: "Deploy",
    description: "Tự động deploy sản phẩm hoàn chỉnh",
  },
];

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-20 sm:py-28 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          <span className="text-white">Từ ý tưởng đến deploy </span>
          <span className="text-primary">hoàn toàn tự động</span>
        </motion.h2>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-dark-border -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="group relative bg-dark-card border border-dark-border rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] cursor-default">
                  <div className="hidden lg:block absolute top-1/2 -right-6 lg:-right-8 -translate-y-1/2 z-10">
                    <svg
                      className="w-8 h-8 text-primary/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>

                  <div className="flex lg:flex-col items-center lg:items-center gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-center lg:text-center">
                      <span className="text-xs font-medium text-primary/70 mb-1 block">
                        Bước {index + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {step.label}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden lg:block absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-dark-card" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
