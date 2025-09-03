import { cn } from "@/lib/utils";

interface MetricCardProps {
  value: string;
  label: string;
  trend?: "up" | "down" | "neutral";
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "success" | "accent" | "primary";
}

export const MetricCard = ({ 
  value, 
  label, 
  trend = "neutral", 
  icon, 
  className,
  variant = "default" 
}: MetricCardProps) => {
  const variantStyles = {
    default: "bg-card border-border",
    success: "bg-gradient-success text-success-foreground border-success/20",
    accent: "bg-gradient-accent text-accent-foreground border-accent/20", 
    primary: "bg-gradient-primary text-primary-foreground border-primary/20"
  };

  const trendIcon = {
    up: "↗",
    down: "↘", 
    neutral: ""
  };

  return (
    <div className={cn(
      "p-6 rounded-xl border shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      variantStyles[variant],
      className
    )}>
      <div className="flex items-center justify-between mb-2">
        {icon && <div className="opacity-80">{icon}</div>}
        {trend !== "neutral" && (
          <span className={cn(
            "text-lg font-semibold",
            trend === "up" ? "text-success" : "text-warning"
          )}>
            {trendIcon[trend]}
          </span>
        )}
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className={cn(
        "text-sm font-medium",
        variant === "default" ? "text-muted-foreground" : "opacity-90"
      )}>
        {label}
      </div>
    </div>
  );
};