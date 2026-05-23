"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex items-center justify-center bg-dark overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
        >
          <span className="text-white">Bắt đầu build sản phẩm </span>
          <span className="text-primary">với AI team</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl mx-auto"
        >
          Biến ý tưởng thành sản phẩm thực tế chỉ trong vài tin nhắn. Không cần
          kỹ năng lập trình.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://t.me/aiteam_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 min-h-[44px] px-10 py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Chat qua Telegram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
