"use client";

import Link from "next/link";
import React from "react";
import Sidebar from "./sidebar";
import Nav from "./navbar";


const Header = () => {
    return (
        <header className="py-4 dark:text-slate-100 w-screen md:mb-5 fixed z-50 bg-zinc-900">
            <div className="container mx-auto flex gap-2 md:justify-between items-center">
                <Sidebar />
                <Link href="/">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        Mike<span className="text-orange-500">.</span>
                    </h1>
                </Link>
                <Nav />
            </div>
        </header>
    );
}
export default Header;