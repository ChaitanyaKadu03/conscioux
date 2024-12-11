import Image from "next/image";
import Link from "next/link";
import react from "react";
import logo from "@/public/images/Logo/Logo.png"
import { navLinksConst } from "@repo/constants/web"

const Navbar = () => {
    return <nav className="flex flex-row justify-between">
        <Link href={"/"}><Image src={logo} alt="Conscioux logo" /></Link>
        <ul className="flex flex-row gap-4">
            {navLinksConst.map((info) => {
                return (
                    <li key={info.id}><Link href={info.link} className="h6">{info.value}</Link></li>
                )
            })}
        </ul>
    </nav>
};

export default Navbar;