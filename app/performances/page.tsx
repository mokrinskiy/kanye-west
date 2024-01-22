import { performances_data } from "@/contentful/performances";
import React from "react";

const Page = () => {
    return (
        <div className="mt-[50px] px-[6vw] mb-[50px]">
            {performances_data.map((performance) => (
                <div key={performance.title}>
                    <h1 className="mt-[70px] mb-[20px] text-[70px]">{performance.title}</h1>
                    <div>
                        {performance.text.map((item) => (
                            <p key={item} className="mt-[15px]">{item}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Page;
