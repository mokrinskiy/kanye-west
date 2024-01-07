import React, { useState } from "react";
import { motion } from "framer-motion";
import { height, opacity } from "./anim";
import Body from "./Body";
import { nav_items } from "@/contentful/constants";
import Image from "next/image";
import Footer from "./Footer";

const Nav = () => {
    const [selectedLink, setSelectedLink] = useState({
        isActive: false,
        index: 0,
    });

    return (
        <motion.div
            className="bg-foreground text-background absolute top-0 w-full z-20 overflow-hidden"
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <div className="flex z-20 mt-[50px] pb-[3vw] px-[3vw]">
                <div className="pr-10 flex flex-col max-md:w-full justify-between">
                    <Body
                        selectedLink={selectedLink}
                        setSelectedLink={setSelectedLink}
                    />
                    <Footer />
                </div>
                <NavImage
                    src={nav_items[selectedLink.index].src}
                    isActive={selectedLink.isActive}
                />
            </div>
        </motion.div>
    );
};

const NavImage = ({ src, isActive }: { src: string; isActive: boolean }) => {
    return (
        <motion.div
            className="max-lg:hidden block relative w-[400px] h-[350px] pl-[50px]"
            variants={opacity}
            animate={isActive ? "open" : "closed"}
        >
            <Image
                className="object-cover"
                src={src}
                fill={true}
                alt="nav_image"
            />
        </motion.div>
    );
};

export default Nav;
