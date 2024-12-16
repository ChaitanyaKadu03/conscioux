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
        <nav className="flex flex-row justify-between items-center px-section py-6 sticky top-0 z-50 bg-gradient-to-b from-neutral-600 from-0% via-[rgb(46,46,46,0.8)] via-60% to-[rgb(46,46,46,0)] to-100%">
            <Link href={"/"}><Image src={logo} alt="Conscioux logo" className="h-8 w-fit" /></Link>
            <ul className="flex flex-row gap-8">
                {navLinksConst.map((info) => {
                    return (
                        <li key={info.id}><Link href={info.link} className={`h6 ${currentPath == info.link ? "text-neutral-20" : "text-neutral-60"}`}>{info.value}</Link></li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Navbar;