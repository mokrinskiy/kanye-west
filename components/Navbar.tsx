import { navbar_link_items } from "@/contentful/constants";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToogle";

const Navbar = () => {
    return (
        <header className="flex items-center px-4 h-[50px] justify-between fixed top-0 w-full z-20">
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
            <div className="space-x-16 flex items-center">
                {navbar_link_items.map(({ title, link }) => (
                    <Link key={title} className="font-poppins" href={link}>
                        {title}
                    </Link>
                ))}
            </div>
        </header>
    );
};

export default Navbar;
