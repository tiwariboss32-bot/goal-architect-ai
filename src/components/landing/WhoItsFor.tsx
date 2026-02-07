import { GraduationCap, Code, Rocket, Brain, Dumbbell, Briefcase, BookOpen } from "lucide-react";

const audiences = [
  { icon: GraduationCap, label: "Students", description: "Exams, entrance tests, certifications" },
  { icon: Code, label: "Developers", description: "Learning stacks, interview prep, projects" },
  { icon: Rocket, label: "Startup Builders", description: "MVPs, launches, growth milestones" },
  { icon: Brain, label: "Learners", description: "New skills, languages, hobbies" },
  { icon: Dumbbell, label: "Fitness Goals", description: "Workout plans, nutrition, habits" },
  { icon: Briefcase, label: "Career Changers", description: "Transitions, upskilling, job hunting" },
  { icon: BookOpen, label: "Skill Development", description: "Courses, certifications, mastery" },
];

const WhoItsFor = () => {
  return (
    <section className="py-24 px-4 relative bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Built For</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Anyone With <span className="text-gradient">Ambition</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're studying for exams or building a startup, GoalBuilder AI adapts to your journey.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 cursor-default"
            >
              <audience.icon className="w-5 h-5 text-primary" />
              <div>
                <span className="font-semibold text-foreground">{audience.label}</span>
                <span className="text-muted-foreground text-sm hidden sm:inline"> · {audience.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
