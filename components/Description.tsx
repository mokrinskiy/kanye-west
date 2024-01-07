import React, { useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
    "American rapper, singer, songwriter, record producer, and fashion designer",
    "One of the world's best-selling music artists with 160 million records sold",
    "West has won 24 Grammy Awards, the joint tenth-most of all time",
];

const Description = () => {
    useEffect(() => {});
    return (
        <div className="h-screen w-full flex items-center px-[6vw]">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-start flex-col w-full border-r-[1px] border-foreground">
                    {phrases.map((item, index) => (
                        <AnimatedText key={index}>{item}</AnimatedText>
                    ))}
                </div>
            </div>
        </div>
    );
};

function AnimatedText({ children }: { children: React.ReactNode }) {
    return (
        <motion.p
            initial={{ x: "-300px", opacity: 0 }}
            whileInView={{ x: "0px", opacity: 1 }}
            transition={{ duration: 1.25 }}
            className="text-2xl max-lg:text-xl font-poppins m-0"
        >
            {children}
        </motion.p>
    );
}

export default Description;
