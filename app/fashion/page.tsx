"use client";
import FashionItem from "@/components/Fashion/FashionItem";
import ParallaxGallery from "@/components/Fashion/ParallaxGallery";
import { fashion_items } from "@/contentful/fashion";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Image from "next/image";
import React from "react";

const Page = () => {
    useSmoothScroll();
    return (
        <div>
            {/* hero */}
            <div className="h-screen w-full flex justify-between border-b-[2px] border-foreground max-md:flex-col">
                <div className="w-[50vw] max-md:w-[100vw] max-md:mt-[60px] max-md:mb-[20px] flex items pl-1 relative flex-col justify-end mb-2 text-white">
                    <img
                        className="object-cover w-[20vw] max-md:w-[50vw]"
                        alt="bio"
                        src="/svgs/Kanye West.svg"
                    />
                    <img
                        className="object-cover w-[45vw] max-md:w-[100vw]"
                        alt="bio"
                        src="/svgs/BIOGRAPHY.svg"
                    />
                </div>
                <div className="w-[50vw] h-full relative max-md:w-[100vw]">
                    <Image
                        fill={true}
                        className="object-cover"
                        src="/images/bio.jpg"
                        alt="kanye"
                        sizes="auto"
                    />
                </div>
            </div>
            <div className="h-screen flex items-center justify-center">
                <div className="w-[60%] border-l-[2px] border-foreground flex justify-end max-md:w-[90%]">
                    <p className="font-poppins text-[25px] w-[90%] max-lg:text-[22px] max-md:text-[18px]">
                        From interning at Fendi to founding Yeezy, Kanye West
                        has done it all. On the rapper-turned-designers
                        birthday, see just how far hes come in the fashion
                        world.
                    </p>
                </div>
            </div>
            <ParallaxGallery />
            {/* info */}
            <div className="px-[6vw] w-full min-h-screen space-y-[25vh]">
                {fashion_items.map((item) => (
                    <FashionItem
                    key={item.id}
                        id={item.id}
                        text={item.text}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
