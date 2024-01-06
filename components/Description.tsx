import React, { useEffect } from "react";
import { motion } from "framer-motion";

const phrases = [
    "American rapper, singer, songwriter, record producer, and fashion designer.",
    "American rapper, singer, songwriter, record producer, and fashion designer.",
    "American rapper, singer, songwriter, record producer, and fashion designer.",
    "American rapper, singer, songwriter, record producer, and fashion designer.",
];

const Description = () => {
    useEffect(() => {});
    return (
        <div className=" mt-[30vw] ml-[10vw] mb-[20vh]">
            {phrases.map((item, index) => (
                <AnimatedText key={index}>{item}</AnimatedText>
            ))}
        </div>
    );
};

function AnimatedText({ children }: { children: React.ReactNode }) {
    return (
        <motion.p
            initial={{ x: "-300px", opacity: 0 }}
            whileInView={{ x: "0px", opacity: 1 }}
            transition={{duration: 1.25}}
            className="text-2xl font-poppins m-0"
        >
            {children}
        </motion.p>
    );
}

export default Description;
