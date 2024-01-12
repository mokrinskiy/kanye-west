"use client";
import ParallaxGallery from "@/components/Fashion/ParallaxGallery";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import React from "react";

const Page = () => {
    useSmoothScroll();
    return (
        <div>
            {/* hero */}
            <div></div>
            {/* video */}
            <div className="w-full h-screen"></div>
            {/* parallax */}
            <ParallaxGallery />
            {/* info */}
            <div className="w-full h-screen"></div>
        </div>
    );
};

export default Page;
