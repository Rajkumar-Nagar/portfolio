"use client";

import Contact from "@/app/contact/page";
import RetroGrid from "@/components/ui/retro-grid";


export function RetroGridDemo() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">

            <Contact />
            <RetroGrid />
        </div>
    );
}
