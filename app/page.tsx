"use client";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Description from "@/components/Description";
import HomeNav from "@/components/HomeNav";

export default function Home() {
    // lenis scroll
    useSmoothScroll();
    return (
        <main className="relative flex overflow-hidden flex-col">
            {/* hero */}
            <div className="h-screen flex flex-col justify-end items-center max-lg:items-end max-lg:flex-row max-lg:justify-center">
                <Marquee>Kanye West</Marquee>
                <div className="w-[85%] max-lg:w-full relative h-[98%] max-lg:h-[550px] max-sm:h-[330px] max-lg:items-end">
                    <Image
                        fill={true}
                        alt="Hero image"
                        className="object-cover h-full w-full"
                        src="/images/hero.png"
                        priority
                    />
                </div>
            </div>
            <div className="h-[1px] w-full bg-foreground"></div>
            {/* description */}
            <Description />
            <HomeNav />
        </main>
    );
}
