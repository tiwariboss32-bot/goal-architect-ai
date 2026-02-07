import { Calendar, Clock, Target, RefreshCw, CheckCircle, Brain } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Weekly Milestones",
    description: "Structured week-by-week goals that break down your journey into manageable chunks.",
  },
  {
    icon: Clock,
    title: "Hourly Focus Blocks",
    description: "Precise time-boxed tasks to maximize your productivity and maintain deep focus.",
  },
  {
    icon: Target,
    title: "Priority Mapping",
    description: "AI identifies what matters most and structures your tasks by impact and urgency.",
  },
  {
    icon: RefreshCw,
    title: "Smart Rescheduling",
    description: "Life happens. AI automatically adjusts your plan while keeping you on track.",
  },
  {
    icon: CheckCircle,
    title: "Progress Tracking",
    description: "Visual dashboards showing completed, pending, and rescheduled tasks at a glance.",
  },
  {
    icon: Brain,
    title: "AI Guidance",
    description: "Intelligent suggestions and tips at every step to optimize your execution.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="text-gradient">Execute</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not motivation. Not generic planning. Real structure. Real execution. Real progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
