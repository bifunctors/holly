import { cn } from "@/lib/utils";

export const Card: React.FC<{ children?: React.ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div className={cn("bg-zinc-800 rounded-md", className)}>
      {children}
    </div>
  );
}
