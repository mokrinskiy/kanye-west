"use client";
import StudioAItem from "@/components/Music/StudioAItem";
import { albums } from "@/contentful/constants";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Page = () => {
    const target = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: target.current,
        layoutEffect: false,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-813%"]);

    return (
        <div>
            {/* studio albums */}
            <div ref={target} className="relative h-[500vh]">
                <div className="sticky top-0 flex  items-center overflow-hidden">
                    <div className="flex gap-10">
                        {albums.map((album) => (
                            <StudioAItem
                                key={album.id}
                                x={x}
                                id={album.id}
                                title={album.title}
                                cover={album.cover}
                                description={album.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* collaborative albums */}
            <div></div>
            {/* compilation albums */}
            <div></div>
            {/* demo albums */}
        </div>
    );
};

export default Page;
