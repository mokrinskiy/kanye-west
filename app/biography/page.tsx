"use client";
import Image from "next/image";
import React from "react";
import BiographyItem from "@/components/BiographyItem";

const Page = () => {
    return (
        <div>
            {/* hero */}
            <div className="h-screen w-full flex justify-between border-b-[2px] border-foreground max-md:flex-col">
                <div className="w-[50vw] max-md:w-[100vw] max-md:mt-[50px] flex items pl-1 relative flex-col justify-end mb-2 text-white">
                    <img
                        className="object-cover w-[20vw] max-md:w-[50vw]"
                        alt="bio"
                        src="/Kanye West’s.svg"
                    />
                    <img
                        className="object-cover w-[45vw] max-md:w-[100vw]"
                        alt="bio"
                        src="/BIOGRAPHY.svg"
                    />
                </div>
                <div className="w-[50vw] h-full relative max-md:w-[100vw]">
                    <Image
                        fill={true}
                        className="object-cover"
                        src="/images/bio.jpg"
                        alt="kanye"
                        sizes="auto"
                    />
                </div>
            </div>
            {/* bio */}
            <div className="h-screen">
                <div className="w-full justify-end flex mt-4">
                    <div className="w-[50%] flex flex-col font-abril text-[20px]">
                        <p>June 8, 1977</p>
                        <p>Atlanta, Georgia</p>
                    </div>
                </div>
                <div className="w-[70vw] pl-[6vw] mt-[30vh]">
                    <q className="text-[45px] font-poppins max-lg:text-[35px] max-md:text-[25px] max-sm:text-[20px]">
                        I am Warhol. I am the No. 1 <b>most impactful artist</b>
                        of our generation. I am Shakespeare in the flesh.
                    </q>
                </div>
            </div>
            <div className="px-[6vw]">
                {/* 01 */}
                <BiographyItem />
            </div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>
        </div>
    );
};

export default Page;
