import Image from "next/image";
import Link from "next/link";
import react from "react";
import logo from "@/public/images/Logo/Logo.png"
import { navLinksConst } from "@repo/constants/web"

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between items-center px-section py-4">
            <Link href={"/"}><Image src={logo} alt="Conscioux logo" className="h-8 w-fit"/></Link>
            <ul className="flex flex-row gap-8">
                {navLinksConst.map((info) => {
                    return (
                        <li key={info.id}><Link href={info.link} className="h6">{info.value}</Link></li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Navbar;