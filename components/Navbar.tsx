import { navbar_link_items } from "@/contentful/constants";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="flex items-center px-4 h-[50px] justify-between fixed top-0 w-full">
            <div>
                <Link href={"/"}>
                    <Image
                        alt="logo"
                        src="/images/logo.png"
                        width={50}
                        height={50}
                    />
                </Link>
            </div>
            <div className="space-x-16">
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
