("");
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const BiographyItem = () => {
    const container = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: container.current,
        offset: ["start end", "end start"],
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -700]);

    return (
        <div className="border-t-[2px] border-foreground">
            <div className="flex justify-between">
                <h1 className="text-[130px] font-abril max-lg:text-[100px] max-md:text-[70px] max-sm:text-[50px]">
                    Early Life
                </h1>
                <p className="text-[25px] font-abril">01</p>
            </div>
            {/* images */}
            <div className="flex w-full justify-center relative mt-[50vh] h-screen">
                {/* image container */}
                <motion.div
                    style={{ y: sm }}
                    className="absolute h-[40vw] w-[30vw] z-[1] max-md:h-[70vw] max-md:w-[60vw]"
                >
                    <Image
                        src="/images/bio.jpg"
                        fill={true}
                        alt="bio"
                        sizes="auto"
                    />
                </motion.div>
                {/* image container 2 */}
                <motion.div
                    style={{ y: md }}
                    className="absolute left-[55vw] top-[5vw] h-[20vw] w-[25vw] z-[2] max-md:h-[40vw] max-md:w-[35vw] max-md:left-100"
                >
                    <Image
                        src="/images/bio.jpg"
                        fill={true}
                        alt="bio"
                        sizes="auto"
                    />
                </motion.div>
                {/* image container 3 */}
                <motion.div
                    style={{ y: lg }}
                    className="absolute  left-[10vw] top-[20vw] h-[25vw] w-[20vw] z-[3] max-md:h-[35vw] max-md:left-0 max-md:top-[50vw] max-md:w-[30vw]"
                >
                    <Image
                        src="/images/bio.jpg"
                        fill={true}
                        alt="bio"
                        sizes="auto"
                    />
                </motion.div>
            </div>
            <div className="w-full flex justify-end">
                <div className="w-[50%] max-md:w-full ">
                    <p className="w-[80%] max-md:w-full text-[18px]">
                        Kanye Omari West was born in Atlanta, Georgia, on June
                        8, 1977. His father, Ray, was a photojournalist for the
                        Atlanta Journal newspaper and was also politically
                        active in the Black Panthers; he later became a
                        Christian counselor. West&apos;s mother, Donda, was a teacher
                        who became a professor of English at Chicago State
                        University, and eventually, her son&apos;s manager before she
                        died at the age of 58 from heart disease after cosmetic
                        surgery in 2007. Her passing would profoundly affect
                        West musically as well as personally.
                        <br />
                        <br /> Ray and Donda divorced amicably when West was
                        three. After that he was raised on Chicago&apos;s
                        middle-class South Shore neighborhood by his mother, and
                        spent summers with his father. At the age of 10, West
                        moved for a year with Donda to China, where she taught
                        as part of a university-exchange program; he was the
                        only foreigner in his class. After returning to Chicago,
                        West was drawn to the South Side&apos;s hip-hop scene, and he
                        befriended the DJ and producer No I.D., who became his
                        mentor. West graduated from Polaris High School and won
                        a scholarship to study at Chicago&apos;s American Academy of
                        Art — but dropped out of college altogether to pursue
                        music, an act that would inform the title of his first
                        solo album years later.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BiographyItem;
