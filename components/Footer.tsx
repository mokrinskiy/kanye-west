import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full h-full bg-foreground px-10 py-5 flex justify-between text-background">
            <h1>Kanye West&apos;s FAN website</h1>
            <div className="flex space-x-3">
                <Link target="true" href={"https://github.com/mokrinskiy/kanye-west"}>
                    GitHub
                </Link>
                    <Github />
                
            </div>
        </div>
    );
};

export default Footer;
