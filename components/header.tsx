"use client";

import Link from "next/link";
import React from "react";
import Sidebar from "./sidebar";
import Nav from "./navbar";


const Header = () => {
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 py-4 backdrop-blur-sm dark:text-slate-100">
            <div className="container mx-auto flex items-center justify-between gap-2">
                <Sidebar />
                <Link href="/" className="mr-auto md:mr-0">
                    <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                        Mike<span className="text-orange-500">.</span>
                    </h1>
                </Link>
                <Nav />
            </div>
        </header>
    );
}
export default Header;