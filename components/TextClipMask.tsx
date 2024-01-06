import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const TextClipMask = () => {
    const container = useRef<any>(null);
    const text = useRef<any>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const { innerHeight } = window;

        gsap.to(text.current, {
            scale: 60,
            duration: 3,
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "center center",
                scrub: 3,
            },
        });
    }, []);

    return (
        <div className="h-[300vh] relative" ref={container}>
            <div
                ref={text}
                className="h-[100vh] overflow-hidden uppercase flex justify-center items-center sticky top-0"
                style={{
                    maskImage: 'url("/images/mask.svg")',
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                    maskSize: "80%",
                }}
            >
                <div className="w-full h-full bg-red-900 object-cover"></div>
            </div>
        </div>
    );
};

export default TextClipMask;
