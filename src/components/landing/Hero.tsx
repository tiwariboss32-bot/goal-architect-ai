import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("You're on the list! We'll be in touch soon.");
    setEmail("");
    setIsLoading(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">AI-Powered Goal Execution</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 animate-slide-up">
          Turn Any Goal Into a
          <span className="block text-gradient mt-2">Structured Roadmap</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          From intention to execution. GoalBuilder AI transforms your goals into weekly milestones, 
          daily tasks, and hourly focus blocks with AI guidance at every step.
        </p>

        {/* Email capture form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-14 bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground text-base"
          />
          <Button type="submit" variant="hero" size="xl" disabled={isLoading}>
            {isLoading ? "Joining..." : "Join Waitlist"}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>

        {/* Social proof */}
        <p className="text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <span className="text-primary font-semibold">500+</span> ambitious people already on the list
        </p>

        {/* Tagline */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Structure beats motivation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
