import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
import { nav_items } from "@/contentful/constants";

gsap.registerPlugin(ScrollTrigger);

export default function HomeNav() {
    const [selectedProject, setSelectedProject] = useState(0);
    const containerRef = useRef<any>(null);

    useLayoutEffect(() => {
        gsap.to(containerRef.current, {
            y: () => {
                const offset =
                    containerRef.current.clientHeight - window.innerHeight;
                return offset;
            },
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                start: "top-=50px",
                end: "bottom+=200px",
            },
        });
    }, []);

    return (
        <div className="flex flex-col px-[6vw]">
            <div className="flex h-[700px] gap-[5%] w-full justify-center">
                <div
                    ref={containerRef}
                    className="h-full relative w-[40%] z-[2]"
                >
                    <img
                        className="object-cover w-full h-full"
                        src={nav_items[selectedProject].src}
                        alt="nav_image"
                    />
                </div>
                <div className="w-[20%] flex">
                    <p>
                        Kanye West has had a profound impact on the music
                        industry, shaping contemporary hip-hop and pushing
                        boundaries with his innovative production techniques.
                        His fearless approach to blending genres, experimenting
                        with sounds, and challenging conventional norms has
                        influenced a generation of artists, leaving an indelible
                        mark on the landscape of modern music.
                    </p>
                </div>
                <div className="w-[20%] flex items-end">
                    <p>
                        Kanye West&apos;s influence on the fashion industry is
                        undeniable, as he transcends the boundaries of music to
                        make a significant impact on style and design. Through
                        collaborations with renowned brands and the creation of
                        his Yeezy fashion line, West has redefined urban
                        fashion, setting trends with his distinct aesthetic. His
                        ability to seamlessly merge streetwear with high fashion
                        has inspired a new era of sartorial innovation,
                        solidifying his role as a trendsetter and fashion icon.
                    </p>
                </div>
            </div>
            <div className="mt-[200px] flex flex-col w-full h-auto relative list-container">
                {nav_items.map((item, index) => (
                    <div
                        onMouseOver={() => setSelectedProject(index)}
                        className="flex w-full border-t-[1px] justify-end border-foreground"
                        key={index}
                    >
                        <p className="flex justify-end mt-[40px] mb-[20px] font-abril uppercase text-[3vw]">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
