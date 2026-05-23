import { Github, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">aiteam</span>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="https://t.me/aiteam_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200"
              aria-label="Telegram"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Telegram</span>
            </a>
            <a
              href="https://github.com/aiteam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} aiteam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
