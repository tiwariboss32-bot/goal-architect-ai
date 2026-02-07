import { Target } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">GoalBuilder</span>
            <span className="text-primary font-semibold">AI</span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-center">
            From goal to execution. Structure beats motivation.
          </p>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 GoalBuilder AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
