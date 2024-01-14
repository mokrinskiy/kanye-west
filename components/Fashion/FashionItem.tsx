import Image from "next/image";
import React from "react";

const FashionItem = ({
    id,
    text,
    image,
}: {
    id: number;
    text: string[];
    image: string | undefined;
}) => {
    return (
        <div className="w-full h-auto flex justify-between gap-[5%] py-5 max-lg:flex-col max-lg:justify-center max-lg:items-center">
            <div className="w-[50%] max-lg:w-[80%] max-md:w-full">
                {text.map((item) => (
                    <>
                        <p className="max-md:text-[15px]">{item}</p>
                        <br />
                    </>
                ))}
            </div>
            {image && (
                <div className="w-[50%] relative h-screen max-lg:mt-10 max-md:w-full">
                    <Image
                        alt="image"
                        className="object-cover"
                        src={image}
                        fill
                        sizes="auto"
                    />
                </div>
            )}
        </div>
    );
};

export default FashionItem;
