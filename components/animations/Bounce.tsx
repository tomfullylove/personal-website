"use client"

import React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils";

interface IBounce {
    className?: string;
    children: React.ReactNode;
    duration?: number;
    delay?: number;
}

export function Bounce({ className, children, duration = 1, delay = 0 }: IBounce) {
    const bounce = {
        duration,
        ease: bounceEase,
        delay: delay
    }
    return (
        <motion.div
            className={cn("relative inline-flex overflow-hidden", className)}
            initial={{ opacity: 1, y : -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={bounce}
        >
            {children}
        </motion.div>
    )
}

function bounceEase(x: number) {
    const n1 = 7.5625
    const d1 = 2.75

    if (x < 1 / d1) {
        return n1 * x * x
    } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75
    } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375
    } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375
    }
}
