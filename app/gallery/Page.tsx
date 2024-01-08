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
                    className="absolute [&:nth-child(1)]:left-[85%] [&:nth-child(1)]:top-[70%]"
                    src={bio}
                    alt="image1"
                    width={300}
                />
                <Image
                    className="absolute [&:nth-child(2)]:left-[70%] [&:nth-child(2)]:top-[-5%]"
                    src={gallery}
                    alt="image1"
                    width={150}
                />
                <Image
                    className="absolute [&:nth-child(3)]:left-[30%] [&:nth-child(3)]:top-[70%]"
                    src={performances}
                    alt="image1"
                    width={200}
                />
            </div>
            {/* plan2 */}
            <div
                ref={plane2}
                className="w-full h-full absolute [&:nth-child(3)]:brightness-[0.7]"
            >
                <Image
                    className="absolute [&:nth-child(1)]:left-[20%] [&:nth-child(1)]:top-[0%]"
                    src={bio}
                    alt="image1"
                    width={200}
                />
                <Image
                    className="absolute [&:nth-child(2)]:left-[-5%] [&:nth-child(2)]:top-[15%]"
                    src={gallery}
                    alt="image1"
                    width={230}
                />
            </div>
            {/* plan3 */}
            <div
                ref={plane3}
                className="w-full h-full absolute [&:nth-child(3)]:brightness-[1.2]"
            >
                <Image
                    className="absolute [&:nth-child(1)]:left-[60%] [&:nth-child(1)]:top-[60%]"
                    src={bio}
                    alt="image1"
                    width={150}
                />
                <Image
                    className="absolute [&:nth-child(2)]:left-[5%] [&:nth-child(2)]:top-[70%]"
                    src={gallery}
                    alt="image1"
                    width={300}
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
