"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  HTMLMotionProps,
} from "motion/react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
  ...motionProps // Explicitly type as HTMLMotionProps<"div">
}: {
  className?: string;
  children?: React.ReactNode;
} & HTMLMotionProps<"div">) => {
  return (
    <motion.div
      className={cn(
        "mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  ...motionProps // Explicitly type as HTMLMotionProps<"div">
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
} & HTMLMotionProps<"div">) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["15deg", "-15deg"]);

  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-15px", "15px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["15px", "-15px"]);

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [0, 100]);
  const glareBackground = useMotionTemplate`
    radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 80%)
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={cn("perspective-1000 w-full", className)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.25 },
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "relative min-h-[250px] h-full rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-[#1e1e1f] via-[#303033] to-[#292a2c] text-[#D3DAD9] shadow-md border border-[#D3DAD9]/20 backdrop-blur-md w-full"
        )}
        {...motionProps}
      >
        {header}
        {icon && <div className="mt-2">{icon}</div>}
        {title && <div className="mt-4 font-bold text-base sm:text-lg">{title}</div>}
        {description && (
          <div className="mt-1 text-xs sm:text-sm text-[#D3DAD9]/80">{description}</div>
        )}

        {/* Glare effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-overlay"
          style={{
            background: glareBackground,
          }}
        />
      </motion.div>
    </div>
  );
};