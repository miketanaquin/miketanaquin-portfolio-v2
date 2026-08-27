"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
        logo: any;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    const [start, setStart] = useState(false);

    const getDirection = useCallback(() => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "right" ? "forwards" : "reverse"
            );
        }
    }, [direction]);

    const getSpeed = useCallback(() => {
        if (containerRef.current) {
            const duration =
                speed === "fast" ? "30s" : speed === "normal" ? "60s" : "180s";
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    }, [speed]);

    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }, [getDirection, getSpeed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 w-max flex-nowrap gap-3 md:gap-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        key={item.title}
                        className="relative w-[220px] max-w-full shrink-0 rounded-[22px] border border-white/10 bg-zinc-900/90 px-3 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_30px_rgba(0,0,0,0.25)] transition duration-300 hover:border-orange-400/40 hover:bg-zinc-900 sm:w-[240px] md:w-[260px] md:px-4 md:py-4"
                    >
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full"
                        >
                            <div className="mb-3 flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/80 text-zinc-100 shadow-inner shadow-orange-500/5 md:h-10 md:w-10">
                                    {item.logo}
                                </div>
                                <span className="text-sm font-medium text-white md:text-base">
                                    {item.title}
                                </span>
                            </div>

                            <p className="line-clamp-3 text-xs leading-5 text-slate-400 md:text-sm md:leading-6">
                                {item.description}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
