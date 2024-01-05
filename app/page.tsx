"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = 1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animate);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: true,
            },
            x: "+=300px",
        });
    }, []);

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    };

    return (
        <main className="relative flex overflow-hidden flex-col">
            <div className="absolute top-[100px]">
                <div ref={slider} className="relative whitespace-nowrap flex font-sans">
                    <p
                        ref={firstText}
                        className="uppercase px-20 font-bold text-[350px] font-abril"
                    >
                        Kanye West{"   "}
                    </p>
                    <p
                        ref={secondText}
                        className="uppercase px-20 font-bold text-[350px] font-abril left-[100%] absolute"
                    >
                        Kanye West{" "}
                    </p>
                </div>
            </div>
            <div className="w-full relative h-screen">
                <Image
                    fill={true}
                    alt="Hero image"
                    className="object-contain"
                    src="/images/hero.png"
                    priority
                />
            </div>
            <div className="h-[500px] flex justify-center items-center">
                <p className="max-w-4xl text-center text-3xl font-poppins">
                    Designer, producer, rapper, composer, stylist, entrepreneur,
                    Kim Kardashian's ex—husband and US presidential candidate -
                    Kanye West's track record of celebrating 46th anniversary on
                    June 8, 2023, worthy of all respect.
                </p>
            </div>
        </main>
    );
}
