import { nav_items } from "@/contentful/constants";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { blur } from "./anim";

const Body = ({
    selectedLink,
    setSelectedLink,
}: {
    selectedLink: { isActive: boolean; index: number };
    setSelectedLink: React.Dispatch<
        React.SetStateAction<{ isActive: boolean; index: number }>
    >;
}) => {
    return (
        <div className="flex flex-wrap max-md:flex-col">
            {nav_items.map(({ title, link }, index: number) => (
                <Link
                    href={link}
                    onMouseOver={() =>
                        setSelectedLink({ isActive: true, index })
                    }
                    onMouseLeave={() =>
                        setSelectedLink({ isActive: false, index })
                    }
                    key={title}
                    className="font-poppins gap-5 text-[60px] max-sm:text-[40px] uppercase font-semibold"
                >
                    <motion.p
                        variants={blur}
                        initial="initial"
                        animate={
                            selectedLink.isActive && selectedLink.index != index
                                ? "open"
                                : "closed"
                        }
                        className="pr-7"
                    >
                        {title}
                    </motion.p>
                </Link>
            ))}
        </div>
    );
};

export default Body;
