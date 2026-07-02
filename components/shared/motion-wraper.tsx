"use client";

import { motion, Variants } from "framer-motion";

interface MotionWrapperProps {
  children: React.ReactNode;
  variants: Variants;
  className?: string;
}

export default function MotionWrapper({
  children,
  variants,
  className,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}