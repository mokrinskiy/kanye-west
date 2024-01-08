"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "../ModeToogle";
import { AnimatePresence, motion } from "framer-motion";
import { background, opacity } from "./anim";
import Nav from "./Nav";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsActive(false);
    }, [pathname]);

    return (
        <header className="fixed top-0 w-full z-10">
            <div className="flex justify-between w-full items-center px-4  h-[50px] ">
                <div className="flex space-x-2 items-center">
                    <Link href={"/"}>
                        <Image
                            alt="logo"
                            src="/logo.png"
                            className="rounded-full"
                            width={30}
                            height={30}
                        />
                    </Link>
                    <ModeToggle />
                </div>
                {/* burger */}
                <div
                    onClick={() => setIsActive(!isActive)}
                    className="flex space-x-2 items-center cursor-pointer z-30"
                >
                    <div className="flex relative">
                        <motion.p
                            variants={opacity}
                            animate={isActive ? "open" : "closed"}
                            className="font-bold flex items-center text-background"
                        >
                            Close
                            <X className="w-[40px] h-[40px] pl-2" />
                        </motion.p>
                        <motion.p
                            variants={opacity}
                            animate={!isActive ? "open" : "closed"}
                            className="font-bold flex items-center absolute"
                        >
                            Menu
                            <Menu className="w-[40px] h-[40px] pl-2" />
                        </motion.p>
                    </div>
                </div>
            </div>
            <motion.div
                variants={background}
                initial="initial"
                animate={isActive ? "open" : "closed"}
                className="h-full top-0 w-full absolute bg-background opacity-80"
            ></motion.div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </header>
    );
};

export default Header;
