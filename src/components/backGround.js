import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";


export  function BackgroundBeamsWithCollisionDemo() {
    return (
        <BackgroundBeamsWithCollision>
            <div className="flex relative flex-col md:flex-row items-center bg-black text-white h-[calc(100vh_-_4rem)]">
                {/* Left Section: Welcome Message and About Me */}
                <div className="flex-1 w-full sm:px-10 px-4">
                <div className="w-full ml-auto max-w-screen-sm">
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-gradient">
                        Welcome to Code With Rajkumar
                    </h1>
                    <p className="text-lg lg:text-xl font-light">
                        Hi, I'm Rajkumar, a passionate full-stack developer and competitive programmer.
                    </p>
                </div>
                </div>

                {/* Right Section: Image with added hover effects */}
                <div className="h-[calc(100vh_-_4rem)] relative max-w-[400px] w-full overflow-hidden">
                    <div className="absolute group -bottom-8 -right-2 w-full h-[80%]">
                        {/* Add a glow effect around the image */}
                        <Image
                            fill
                            src="/profile.png"
                            alt="Rajkumar"
                            className="shadow-lg h-full origin-bottom-right object-contain aspect-auto transform transition duration-500 group-hover:scale-105"
                        /> 
                        <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-gradient-r from-purple-500 via-pink-500 to-red-500 transition duration-500"></div>
                    </div>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}
