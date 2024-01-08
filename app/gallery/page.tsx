"use client";
import Image from "next/image";
import bio from "../../public/images/bio.jpg";
import gallery from "../../public/images/gallery.jpg";
import performances from "../../public/images/performances.jpg";
import gsap from "gsap";
import { useRef } from "react";

const Page = () => {
    const plane1 = useRef(null);
    const plane2 = useRef(null);
    const plane3 = useRef(null);

    let xForce = 0;
    let yForce = 0;
    let requestAnimationFrameId: any = null;

    const speed = 0.1;
    const easing = 0.08;

    const lerp = (start: number, end: number, amount: number) =>
        start * (1 - amount) + end * amount;

    const manageMouseMove = (e: any) => {
        const { movementX, movementY } = e;
        xForce += speed * movementX;
        yForce += speed * movementY;

        if (!requestAnimationFrameId) {
            requestAnimationFrameId = requestAnimationFrame(animate);
        }
    };

    const animate = () => {
        xForce = lerp(xForce, 0, easing);
        yForce = lerp(yForce, 0, easing);
        gsap.set(plane1.current, {
            x: `+=${xForce * 0.09}`,
            y: `+=${yForce * 0.09}`,
        });
        gsap.set(plane2.current, {
            x: `+=${xForce * 0.05}`,
            y: `+=${yForce * 0.05}`,
        });
        gsap.set(plane3.current, {
            x: `+=${xForce * 0.03}`,
            y: `+=${yForce * 0.03}`,
        });

        if (Math.abs(xForce) < 0.01) xForce = 0;
        if (Math.abs(yForce) < 0.01) yForce = 0;

        if (xForce > 0 || yForce > 0) {
            requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(requestAnimationFrameId);
            requestAnimationFrameId = null;
        }
    };

    return (
        <div
            onMouseMove={(e) => manageMouseMove(e)}
            className="h-screen w-full overflow-hidden relative"
        >
            {/* plan1 */}
            <div
                ref={plane1}
                className="w-full h-full absolute [&:nth-child(3)]:brightness-[0.7]"
            >
                <Image
                    className="absolute [&:nth-child(1)]:left-[85%] [&:nth-child(1)]:top-[30%] w-[300px] max-md:w-[150px]"
                    src={bio}
                    alt="image1"
                    style={{
                        maxWidth: "300px",
                    }}
                />
                <Image
                    className="absolute [&:nth-child(2)]:left-[70%] [&:nth-child(2)]:top-[-5%] max-md:w-[75px]"
                    src={gallery}
                    alt="image1"
                    style={{
                        maxWidth: "150px",
                    }}
                />
                <Image
                    className="absolute [&:nth-child(3)]:left-[30%] [&:nth-child(3)]:top-[70%] max-md:w-[100px]"
                    src={performances}
                    alt="image1"
                    style={{
                        maxWidth: "200px",
                    }}
                />
            </div>
            {/* plan2 */}
            <div
                ref={plane2}
                className="w-full h-full absolute [&:nth-child(3)]:brightness-[0.7]"
            >
                <Image
                    className="absolute [&:nth-child(1)]:left-[20%] [&:nth-child(1)]:top-[0%] max-md:w-[100px]"
                    src={bio}
                    alt="image1"
                    style={{
                        maxWidth: "200px",
                    }}
                />
                <Image
                    className="absolute [&:nth-child(2)]:left-[-5%] [&:nth-child(2)]:top-[15%] max-md:w-[115px]"
                    src={gallery}
                    alt="image1"
                    style={{
                        maxWidth: "230px",
                    }}
                />
            </div>
            {/* plan3 */}
            <div
                ref={plane3}
                className="w-full h-full absolute [&:nth-child(3)]:brightness-[1.2]"
            >
                <Image
                    className="absolute [&:nth-child(1)]:left-[60%] [&:nth-child(1)]:top-[60%] max-md:w-[75px]"
                    src={bio}
                    alt="image1"
                    style={{
                        maxWidth: "150px",
                    }}
                />
                <Image
                    className="absolute [&:nth-child(2)]:left-[2%] [&:nth-child(2)]:top-[67%] max-md:w-[150px] max-md:[&:nth-child(2)]:top-[45%]"
                    src={gallery}
                    alt="image1"
                    style={{
                        maxWidth: "300px",
                    }}
                />
            </div>
            {/* title */}
            <div className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
                <h1 className="items-center">Gallery</h1>
            </div>
        </div>
    );
};

export default Page;
