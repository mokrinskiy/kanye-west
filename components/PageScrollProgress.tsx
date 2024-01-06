"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const PageScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <motion.div
            className="fixed bottom-0 left-0 right-0 h-[5px] bg-foreground origin-left"
            style={{ scaleX }}
        />
    );
};

export default PageScrollProgress;
