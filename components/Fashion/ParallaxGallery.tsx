"use client";
import { fashion_gallery_images } from "@/contentful/constants";
import useDimension from "@/hooks/useDimension";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";

const ParallaxGallery = () => {
    const container = useRef<any>(null);
    const { height } = useDimension();

    const { scrollYProgress } = useScroll({
        target: container.current,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2.9]);

    const images = fashion_gallery_images;

    return (
        <div className="mb-[125px]">
            <div
                ref={container}
                className="h-[250vh] bg-foreground flex flex-row  gap-[2vw] p-[2vw] box-border overflow-hidden"
            >
                <Column
                    className="top-[-20%]"
                    images={[images[8], images[1], images[2]]}
                    y={y1}
                />
                <Column
                    className="top-[-25%]"
                    images={[images[3], images[4], images[5]]}
                    y={y2}
                />
                <Column
                    className="top-[-15%]"
                    images={[images[7], images[6], images[0]]}
                    y={y3}
                />
                <Column
                    className="top-[-30%]"
                    images={[images[9], images[10], images[11]]}
                    y={y4}
                />
            </div>
        </div>
    );
};

const Column = ({
    y,
    className,
    images,
}: {
    y: MotionValue<number>;
    className?: string;
    images: string[];
}) => {
    return (
        <motion.div
            style={{ y }}
            className={`w-[25%] h-full flex flex-col gap-[2vw] relative ${className}`}
        >
            {images.map((src, index) => (
                <div className="w-full h-full relative" key={index}>
                    <Image
                        src={`/images/fashion/${src}`}
                        className="object-cover overflow-hidden rounded-xl"
                        fill
                        sizes="auto"
                        alt="fashion"
                    />
                </div>
            ))}
        </motion.div>
    );
};

export default ParallaxGallery;
