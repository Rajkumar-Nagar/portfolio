import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <nav className="bg- backdrop-blur-md  text-white sticky top-0 z-50 flex justify-between items-center py-4 px-6 h-16">
            <div className="flex items-center">
                {/* Replace '/your-logo.png' with your actual logo */}
                {/* <img src="/your-logo.png" alt="Logo" className="w-10 h-10 mr-3" /> */}
                <span className="text-xl font-bold">CodeWithRaj</span>
            </div>
            <ul className=" space-x-6 sm:flex hidden">
                <li>
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                </li>
                <li>
                    <Link href="/projects" className="hover:text-gray-400">Projects</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
