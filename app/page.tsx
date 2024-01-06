"use client";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Description from "@/components/Description";

export default function Home() {
    // lenis scroll
    useSmoothScroll();

    return (
        <main className="relative flex overflow-hidden flex-col">
            {/* hero */}
            <div>
                <Marquee>Kanye West</Marquee>
                <div className="w-full relative h-screen">
                    <Image
                        fill={true}
                        alt="Hero image"
                        className="object-contain max-md:w-[300px] max-md:h-[300px]"
                        src="/images/hero.png"
                        priority
                    />
                </div>
            </div>
            <div className="h-[1px] w-full bg-foreground"></div>
            {/* description */}
            <Description />
        </main>
    );
}
