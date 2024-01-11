import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type BiographyItemProps = {
    images: string[] | undefined;
    title: string;
    index: number;
    text: string[] | undefined;
};

const BiographyItem = ({ images, text, title, index }: BiographyItemProps) => {
    const container = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: container.current,
        offset: ["start end", "end start"],
    });
    const sm = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const md = useTransform(scrollYProgress, [0, 1], [0, -400]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -700]);

    return (
        <div className="border-t-[2px] border-foreground">
            {/* title */}
            <div className="flex justify-between">
                {text ? (
                    <h1 className="text-[100px] font-abril max-lg:text-[70px] max-md:text-[40px] max-sm:text-[35px]">
                        {title}
                    </h1>
                ) : (
                    <div className="space-x-5 flex items-center">
                        <h1 className="text-[50px] font-abril max-lg:text-[40px] max-md:text-[30px] max-sm:text-[20px]">
                            {title}
                        </h1>
                        <ExternalLink className="max-md:w-4" />
                    </div>
                )}
                <p className="text-[25px] font-abril max-md:text-[20px]">
                    {index < 10 ? "0" + index : index}
                </p>
            </div>
            {/* images */}
            {images?.length ? (
                images?.length === 3 && (
                    <div className="flex w-full justify-center relative mt-[50vh] h-screen">
                        <motion.div
                            style={{ y: sm }}
                            className="absolute h-[40vw] w-[30vw] z-[1] max-md:h-[70vw] max-md:w-[60vw]"
                        >
                            <Image
                                src={images[0]}
                                fill={true}
                                className="object-cover"
                                alt="bio"
                                sizes="auto"
                            />
                        </motion.div>
                        <motion.div
                            style={{ y: md }}
                            className="absolute left-[55vw] top-[5vw] h-[20vw] w-[25vw] z-[2] max-md:h-[40vw] max-md:w-[35vw] max-md:left-100"
                        >
                            <Image
                                src={images[1]}
                                className="object-cover"
                                fill={true}
                                alt="bio"
                                sizes="auto"
                            />
                        </motion.div>
                        <motion.div
                            style={{ y: lg }}
                            className="absolute  left-[10vw] top-[20vw] h-[25vw] w-[20vw] z-[3] max-md:h-[35vw] max-md:left-0 max-md:top-[50vw] max-md:w-[30vw]"
                        >
                            <Image
                                src={images[2]}
                                fill={true}
                                className="object-cover"
                                alt="bio"
                                sizes="auto"
                            />
                        </motion.div>
                    </div>
                )
            ) : (
                <div className="mt-[150px]"></div>
            )}
            {/* text */}
            {text && (
                <div
                    className={`w-full flex max-md:flex-col justify-end ${
                        images?.length == 1 && "md:mt-[150px]"
                    }`}
                >
                    {images?.length == 1 && (
                        <div
                            className={`w-[50vw] h-[25vw] relative mr-10 max-md:w-full mb-5 max-md:h-[50vw] ${
                                images?.length == 1 && "max-md:mt-5"
                            }`}
                        >
                            <Image
                                fill={true}
                                className="object-cover"
                                src={images[0]}
                                sizes="auto"
                                alt="bio"
                            />
                        </div>
                    )}
                    <div className="w-[50%] max-md:w-full">
                        <div className="w-[80%] max-md:w-full text-[18px]">
                            {text.map((item) => (
                                <div key={item}>
                                    <p>{item}</p>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BiographyItem;
