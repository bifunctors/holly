"use client";

import { cn } from "@/lib/utils";

export const SongProgress: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div style={{ width: `${progress}%` }} className={cn("bg-white h-1 fixed bottom-0 left-0 right-0", progress < 100 ? "rounded-r-full" : "")}>
    </div>
  );
}
