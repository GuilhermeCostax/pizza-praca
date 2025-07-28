import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface QualityIndicatorProps {
  icon: LucideIcon;
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export const QualityIndicator = ({
  icon: Icon,
  text,
  className,
  iconClassName,
  textClassName
}: QualityIndicatorProps) => {
  return (
    <div className={cn(
      "flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20",
      "hover:bg-white/20 transition-all duration-300",
      className
    )}>
      <Icon 
        className={cn(
          "w-5 h-5 text-pizza-red",
          iconClassName
        )} 
      />
      <span className={cn(
        "text-white font-medium text-sm",
        textClassName
      )}>
        {text}
      </span>
    </div>
  );
};

export default QualityIndicator;