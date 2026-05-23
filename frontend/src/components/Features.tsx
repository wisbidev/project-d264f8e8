"use client";

import { motion } from "framer-motion";
import { MessageCircle, Bot, GitBranch, Calculator, Rocket, Activity } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Telegram giao tiếp",
    description: "Toàn bộ quy trình qua Telegram, không cần app mới",
  },
  {
    icon: Bot,
    title: "Không cần quản lý dev",
    description: "AI tự phân tích, code, test, deploy",
  },
  {
    icon: GitBranch,
    title: "Auto GitHub repo",
    description: "Tự động tạo repo, commit, pull request",
  },
  {
    icon: Calculator,
    title: "Estimate trước build",
    description: "Báo giá và thời gian trước khi build",
  },
  {
    icon: Rocket,
    title: "Auto deploy",
    description: "Deploy sau mỗi function hoàn thỉnh",
  },
  {
    icon: Activity,
    title: "Realtime tracking",
    description: "Xem tiến độ từng agent qua Telegram",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6"
        >
          <span className="text-white">Tự động hóa toàn bộ quy trình </span>
          <span className="text-primary">phát triển phần mềm</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-center text-lg mb-16 max-w-2xl mx-auto"
        >
          Mọi thứ được tự động hóa — từ ý tưởng đến sản phẩm hoàn chỉnh
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark-card border border-dark-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
