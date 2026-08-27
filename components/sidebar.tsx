"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/lib/site-data";
import { useEffect, useState } from "react";

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems
                .map((section) => {
                    const element = document.getElementById(section.id);
                    if (!element) return null;

                    return {
                        id: section.id,
                        offsetTop: element.offsetTop,
                        offsetHeight: element.offsetHeight,
                    };
                })
                .filter((section): section is { id: string; offsetTop: number; offsetHeight: number } => Boolean(section));

            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const currentSection = sections.find(
                (section) =>
                    scrollPosition >= section.offsetTop &&
                    scrollPosition < section.offsetTop + section.offsetHeight
            );

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (!section) return;

        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
    };

    return (
        <div className="md:hidden overflow-x-hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50" className="dark:fill-white">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Mike<span className="text-orange-500">.</span></SheetTitle>
                    </SheetHeader>

                    {navItems.map((item, index) => (
                        <div className="grid gap-4 py-4" key={`${item.id}-${index}`}>
                            <SheetClose asChild className="grid grid-cols-4 items-center gap-4 font-medium">
                                <div
                                    className={`cursor-pointer ${activeSection === item.id ? "text-slate-100 underline underline-offset-8 decoration-orange-500" : ""}`}
                                    onClick={() => handleScrollToSection(item.id)}
                                >
                                    {item.name}
                                </div>
                            </SheetClose>
                        </div>
                    ))}
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default Sidebar;
