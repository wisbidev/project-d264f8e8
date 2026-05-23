"use client";

import { motion } from "framer-motion";
import { ClipboardList, GitMerge, Code2, FlaskConical } from "lucide-react";

const agents = [
  {
    icon: ClipboardList,
    role: "PM",
    title: "Product Manager",
    description: "Phân tích yêu cầu, lên kế hoạch và quản lý phạm vi dự án",
    responsibilities: [
      "Thu thập và phân tích yêu cầu từ người dùng",
      "Lên kế hoạch sprint và phân chia công việc",
      "Quản lý phạm vi và kỳ vọng của dự án",
      "Giao tiếp với stakeholder qua Telegram",
    ],
  },
  {
    icon: GitMerge,
    role: "TL",
    title: "Team Lead",
    description: "Quyết định kiến trúc, review code và merge pull requests",
    responsibilities: [
      "Thiết kế kiến trúc hệ thống và tech stack",
      "Review và merge pull requests",
      "Đảm bảo chất lượng code và best practices",
      "Giải quyết các vấn đề kỹ thuật phức tạp",
    ],
  },
  {
    icon: Code2,
    role: "Dev",
    title: "Developer",
    description: "Implement tính năng, viết code sạch và maintainable",
    responsibilities: [
      "Implement các tính năng theo specification",
      "Viết code sạch, maintainable và well-documented",
      "Tạo và quản lý GitHub repositories",
      "Setup CI/CD và tự động hóa deployment",
    ],
  },
  {
    icon: FlaskConical,
    role: "TestLead",
    title: "Test Lead",
    description: "Xây dựng chiến lược test và đảm bảo chất lượng sản phẩm",
    responsibilities: [
      "Thiết lập chiến lược và kế hoạch testing",
      "Viết unit tests và integration tests",
      "Kiểm thử tự động và regression testing",
      "Đảm bảo chất lượng trước khi deploy",
    ],
  },
];

export default function AIAgents() {
  return (
    <section id="agents" className="py-20 sm:py-28 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">AI Agents </span>
            <span className="text-primary">chuyên nghiệp</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Đội ngũ AI agents làm việc 24/7, tự động hóa toàn bộ quy trình phát
            triển phần mềm
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-dark-card border border-dark-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <agent.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">
                      {agent.role}
                    </span>
                    <h3 className="text-xl font-bold text-white">{agent.title}</h3>
                  </div>

                  <p className="text-slate-400 text-sm mb-4">{agent.description}</p>

                  <ul className="space-y-2">
                    {agent.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{item}</span>
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
