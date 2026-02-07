import { Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToEarlyAccess = () => {
    document.getElementById("early-access")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Target className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">GoalBuilder</span>
          <span className="text-primary font-semibold text-sm">AI</span>
        </div>

        {/* CTA */}
        <Button variant="hero" size="sm" onClick={scrollToEarlyAccess}>
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
