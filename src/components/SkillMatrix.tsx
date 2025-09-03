import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  category: string;
}

interface SkillMatrixProps {
  skills: Skill[];
  className?: string;
}

export const SkillMatrix = ({ skills, className }: SkillMatrixProps) => {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-gradient-success text-success-foreground border-success/20";
      case "Advanced":
        return "bg-gradient-accent text-accent-foreground border-accent/20";
      case "Proficient":
        return "bg-gradient-primary text-primary-foreground border-primary/20";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className={cn("space-y-8", className)}>
      {Object.entries(groupedSkills).map(([category, categorySkills]) => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-card-foreground">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {categorySkills.map((skill, index) => (
              <div
                key={index}
                className={cn(
                  "px-4 py-2 rounded-lg border font-medium text-sm transition-all duration-200 hover:scale-105",
                  getLevelColor(skill.level)
                )}
              >
                <span className="font-semibold">{skill.name}</span>
                <span className="ml-2 opacity-80 text-xs">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};