import { Check, X } from "lucide-react";

const comparisons = [
  { normal: "Task lists", goalBuilder: "Structured roadmaps" },
  { normal: "Static plans", goalBuilder: "Dynamic AI planning" },
  { normal: "Generic advice", goalBuilder: "Personalized system" },
  { normal: "No guidance", goalBuilder: "Step-by-step guidance" },
  { normal: "No accountability", goalBuilder: "Progress-driven tracking" },
];

const Comparison = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Why Different</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Not Just Another <span className="text-gradient">To-Do App</span>
          </h2>
        </div>

        <div className="rounded-2xl bg-card border border-border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 bg-secondary/50">
            <div className="p-5 text-center border-r border-border">
              <span className="text-muted-foreground font-medium">Normal Tools</span>
            </div>
            <div className="p-5 text-center">
              <span className="text-gradient font-bold">GoalBuilder AI</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div key={index} className="grid grid-cols-2 border-t border-border">
              <div className="p-5 flex items-center gap-3 border-r border-border">
                <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-muted-foreground">{item.normal}</span>
              </div>
              <div className="p-5 flex items-center gap-3 bg-primary/5">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{item.goalBuilder}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;
