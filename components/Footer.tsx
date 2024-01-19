import Link from "next/link";
import React from "react";
import { Github } from "lucide-react";

const Footer = () => {
    return (
        <div className="w-full h-full bg-foreground p-10 flex justify-between text-background">
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
