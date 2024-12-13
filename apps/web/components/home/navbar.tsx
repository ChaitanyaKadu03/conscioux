"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/public/images/Logo/Logo.png"
import { navLinksConst } from "@repo/constants/web"

const Navbar = () => {
    const [currentPath, setCurrentPath] = useState("/");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, [])

    return (
        <nav className="flex flex-row justify-between items-center px-section py-6 sticky top-0 bg-navy-400 z-50">
            <Link href={"/"}><Image src={logo} alt="Conscioux logo" className="h-8 w-fit" /></Link>
            <ul className="flex flex-row gap-8">
                {navLinksConst.map((info) => {
                    return (
                        <li key={info.id}><Link href={info.link} className={`h6 ${currentPath == info.link ? "text-neutral-0" : "text-neutral-50"}`}>{info.value}</Link></li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Navbar;