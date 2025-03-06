"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import React from "react";

interface AuroraTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn("relative inline-flex overflow-hidden", className)}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 mix-blend-lighten dark:mix-blend-darken">
        <span className="pointer-events-none absolute -top-1/2 h-[600px] w-[600px] rounded-full bg-(--color-1) mix-blend-overlay blur-[3rem] animate-aurora-1-border animate-aurora-1"></span>
        <span className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-7xl bg-(--color-2) mix-blend-overlay blur-[3rem] animate-aurora-2-border animate-aurora-2"></span>
        <span className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-6xl bg-(--color-3) mix-blend-overlay blur-[3rem] animate-aurora-3-border animate-aurora-3"></span>
        <span className="pointer-events-none absolute -bottom-1/2 right-0 h-[600px] w-[600px] rounded-4xl bg-(--color-4) mix-blend-overlay blur-[3rem] animate-aurora-4-border animate-aurora-4"></span>
      </span>
    </MotionComponent>
  );
}
