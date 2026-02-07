import { MessageSquare, Zap, LayoutDashboard, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Tell Us Your Goal",
    description: "Simply describe what you want to achieve. Our AI asks smart clarifying questions to understand your situation.",
  },
  {
    icon: Zap,
    step: "02",
    title: "AI Builds Your Plan",
    description: "Click 'Start Building' and watch as AI generates week-wise goals, daily breakdowns, and hourly task planning.",
  },
  {
    icon: LayoutDashboard,
    step: "03",
    title: "Get Your Dashboard",
    description: "Access your personalized dashboard with task boards, focus plans, and progress tracking all in one place.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Execute & Track",
    description: "Follow your structured plan, mark tasks complete, and let AI reschedule intelligently when life happens.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            From Goal to <span className="text-gradient">Execution</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform any goal into a structured, actionable system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Step number */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Example prompt */}
        <div className="mt-16 p-6 rounded-2xl bg-card border border-border max-w-2xl mx-auto">
          <p className="text-sm text-primary mb-3 font-medium">Example prompt:</p>
          <p className="text-xl text-foreground italic">
            "I have exams in 30 days. Help me prepare."
          </p>
          <p className="text-muted-foreground mt-4 text-sm">
            → AI will ask about subjects, daily hours, weak areas, and learning style before building your personalized study roadmap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
