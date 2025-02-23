
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmergencyButton({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative group",
        "w-32 h-32 md:w-40 md:h-40",
        "rounded-full overflow-hidden",
        "bg-destructive shadow-lg",
        "transform transition-all duration-300",
        "hover:scale-105 active:scale-95",
        "flex items-center justify-center",
        "animate-glow",
        className
      )}
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      <div className="relative flex flex-col items-center gap-2 text-destructive-foreground">
        <AlertTriangle className="w-12 h-12 md:w-16 md:h-16" />
        <span className="font-semibold text-lg md:text-xl">SOS</span>
      </div>
    </button>
  );
}
