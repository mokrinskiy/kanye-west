"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Marquee = ({ children }: { children: React.ReactNode }) => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = 1;

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        } else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText?.current, { xPercent: xPercent });
        gsap.set(secondText?.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
            },
            x: "+=500px",
        });
        requestAnimationFrame(animate);
    }, []);

    return (
        <div className="absolute max-md:top-[170px] top-[100px]">
            <div ref={slider} className="relative whitespace-nowrap flex">
                <p
                    ref={firstText}
                    className="uppercase px-20 max-lg:text-[300px] max-sm:text-[100px] max-md:text-[150px] font-bold text-[350px] font-abril"
                >
                    {children}
                </p>
                <p
                    ref={secondText}
                    className="uppercase px-20 font-bold max-sm:text-[100px]  max-lg:text-[300px] max-md:text-[150px] text-[350px] font-abril left-[100%] absolute"
                >
                    {children}
                </p>
            </div>
        </div>
    );
};

export default Marquee;
