"use client";
import { albums } from "@/contentful/music";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Image from "next/image";
import React from "react";

const Page = () => {
    useSmoothScroll();
    return (
        <div className="mt-[50px] gap-[5%] px-[6vw] space-y-[70px] mb-[50px]">
            {albums.map((item) => (
                <div key={item.title}>
                    <h1 className="text-[40px] font-abril max-md:text-[30px]">
                        {item.title}
                    </h1>
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 h-max mt-3 gap-y-10">
                        {item.data.map((album) => (
                            <div
                                key={album.id}
                                className="flex justify-center items-center flex-col"
                            >
                                <div className="w-[300px] h-[300px] relative max-md:w-[150px] max-md:h-[150px]">
                                    <Image
                                        src={album.cover}
                                        alt="cover"
                                        fill
                                        sizes="auto"
                                    />
                                </div>
                                <h1 className="max-md:text-[14px] mt-1">
                                    {album.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;
