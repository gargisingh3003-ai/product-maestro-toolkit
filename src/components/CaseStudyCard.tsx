import { Badge } from "@/components/ui/badge";
import { MetricCard } from "./MetricCard";
import { cn } from "@/lib/utils";

interface Metric {
  value: string;
  label: string;
  variant?: "default" | "success" | "accent" | "primary";
}

interface CaseStudyCardProps {
  title: string;
  company: string;
  duration: string;
  tags: string[];
  problem: string;
  solution: string;
  framework: string;
  metrics: Metric[];
  impact: string;
  className?: string;
}

export const CaseStudyCard = ({
  title,
  company,
  duration,
  tags,
  problem,
  solution,
  framework,
  metrics,
  impact,
  className
}: CaseStudyCardProps) => {
  return (
    <div className={cn(
      "bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
      className
    )}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-title text-card-foreground mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span className="font-semibold text-primary">{company}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
          🚨 Challenge
        </h4>
        <p className="text-body text-muted-foreground leading-relaxed">
          {problem}
        </p>
      </div>

      {/* Solution */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
          💡 Strategic Solution
        </h4>
        <p className="text-body text-muted-foreground leading-relaxed mb-4">
          {solution}
        </p>
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">Framework Applied:</span> {framework}
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
          📊 Key Results
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              label={metric.label}
              variant={metric.variant || "success"}
              className="text-center"
            />
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="bg-gradient-subtle rounded-lg p-6">
        <h4 className="text-lg font-semibold text-card-foreground mb-3 flex items-center gap-2">
          🏆 Business Impact
        </h4>
        <p className="text-body text-muted-foreground leading-relaxed">
          {impact}
        </p>
      </div>
    </div>
  );
};