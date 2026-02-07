import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Star, Zap, Users, Gift } from "lucide-react";
import { toast } from "sonner";

const benefits = [
  { icon: Star, text: "Priority access to beta" },
  { icon: Zap, text: "Free usage during beta" },
  { icon: Users, text: "Shape product features" },
  { icon: Gift, text: "Custom roadmap generation" },
];

const EarlyAccess = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Welcome aboard! You're now on the early access list.");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-card border border-border overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Join <span className="text-gradient">Early Access</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Be among the first to transform your goals into structured execution systems.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                >
                  <benefit.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-background/50 border-border text-foreground placeholder:text-muted-foreground text-base"
              />
              <Button type="submit" variant="hero" size="xl" disabled={isLoading}>
                {isLoading ? "Joining..." : "Get Early Access"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6">
              No spam. Just updates on our launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
