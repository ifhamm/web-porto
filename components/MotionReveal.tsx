"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type MotionRevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function MotionReveal({ delay = 0, className, children }: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, rotate: -0.8 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
