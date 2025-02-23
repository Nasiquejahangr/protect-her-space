
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function QuickAction({ icon: Icon, label, onClick, className }: QuickActionProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "flex flex-col items-center gap-2 p-6",
        "h-auto",
        "glass glass-hover",
        "group transition-all duration-300",
        className
      )}
      onClick={onClick}
    >
      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </Button>
  );
}
