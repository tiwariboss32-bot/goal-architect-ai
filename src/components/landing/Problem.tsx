import { X } from "lucide-react";

const problems = [
  "Where to start",
  "How to structure preparation",
  "What to do daily",
  "Staying consistent",
  "Tracking progress clearly",
];

const Problem = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Problem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            People know what they want to achieve, but they struggle with turning that vision into action.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-destructive/50 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <span className="text-foreground font-medium">{problem}</span>
            </div>
          ))}
        </div>

        <div className="text-center p-8 rounded-2xl bg-gradient-card border border-border">
          <p className="text-xl text-muted-foreground mb-4">
            Most tools give to-do lists.
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gradient">
            GoalBuilder AI gives a roadmap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
