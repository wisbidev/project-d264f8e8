import { ArrowRight, Play } from "lucide-react";
import Pipeline from "@/components/Pipeline";
import AIAgents from "@/components/AIAgents";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">AI Team.</span>{" "}
            <span className="text-primary">Không cần thuê dev.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Mô tả ý tưởng của bạn — AI team tự phân tích, lên kế hoạch, code,
            test và deploy sản phẩm hoàn chỉnh qua Telegram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary-dark hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 min-w-[200px]"
            >
              Bắt đầu ngay
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#pipeline"
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-8 py-3 border-2 border-primary/50 hover:border-primary text-primary hover:text-white font-semibold rounded-lg transition-all duration-200 min-w-[200px]"
            >
              <Play className="w-5 h-5" />
              Xem cách hoạt động
            </a>
          </div>
        </div>
      </section>

      <Pipeline />
      <AIAgents />
      <FeaturesSection />
    </main>
  );
}
