"use client";

import { motion } from "framer-motion";
import { ClipboardList, Architecture, Code, TestTube } from "lucide-react";

const agents = [
  {
    icon: ClipboardList,
    role: "PM",
    title: "Quản lý dự án",
    responsibilities: [
      "Lên kế hoạch và phân tích yêu cầu",
      "Phối hợp giữa các agent",
      "Quản lý tiến độ và scope",
    ],
  },
  {
    icon: Architecture,
    role: "TL",
    title: "Kiến trúc sư",
    responsibilities: [
      "Thiết kế hệ thống tổng thể",
      "Review code và merge PR",
      "Đảm bảo chất lượng kiến trúc",
    ],
  },
  {
    icon: Code,
    role: "Dev",
    title: "Lập trình viên",
    responsibilities: [
      "Code từng function theo plan",
      "Tuân thủ convention của dự án",
      "Tối ưu performance và maintainability",
    ],
  },
  {
    icon: TestTube,
    role: "TestLead",
    title: "Kiểm thử",
    responsibilities: [
      "Viết test case toàn diện",
      "Đảm bảo chất lượng sản phẩm",
      "Kiểm tra edge cases và regression",
    ],
  },
];

export default function AIAgents() {
  return (
    <section
      id="agents"
      className="py-20 sm:py-28 bg-dark relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card/30 to-dark" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4"
        >
          <span className="text-white">Gặp gỡ </span>
          <span className="text-primary">AI team</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-center text-lg mb-16 max-w-2xl mx-auto"
        >
          4 agent chuyên biệt làm việc cùng nhau để biến ý tưởng thành sản phẩm
          hoàn chỉnh
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark-card border border-dark-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <agent.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-bold text-primary">
                      {agent.role}
                    </span>
                    <span className="text-slate-500">—</span>
                    <h3 className="text-xl font-semibold text-white">
                      {agent.title}
                    </h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {agent.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base text-slate-300"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
