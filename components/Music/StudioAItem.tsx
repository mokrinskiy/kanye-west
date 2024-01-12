import React from "react";
import ModalItem from "../ModalItem";
import { motion } from "framer-motion";
import Image from "next/image";

const StudioAItem = ({
    title,
    cover,
    description,
    id,
}: {
    title: string;
    cover: string;
    description: string | undefined;
    id: number;
}) => {
    return (
        <motion.div
            whileHover={{ scale: 0.98 }}
            className="flex flex-col h-screen w-[40vw] max-md:w-[70vw] justify-center"
        >
            <ModalItem
                id={id}
                title={title}
                cover={cover}
                description={description}
            >
                <div className="w-[40vw] h-[40vw] max-md:w-[70vw] max-md:h-[70vw] relative">
                    <Image alt={title} src={cover} fill={true} sizes="auto" />
                </div>
                <div className="flex justify-between mt-2 items-center">
                    <p className="text-[25px] font-bold max-lg:text-[20px] max-md:text-[15px]">
                        {title}
                    </p>
                </div>
            </ModalItem>
        </motion.div>
    );
};

export default StudioAItem;
