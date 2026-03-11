"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName =usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const Navlinks = (
        <>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
        </>
    )
    console.log(pathName, pathName.includes("dashboard"));

    if (!pathName.includes("dashboard")) {
 return (
        <nav className=" shadow-md w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        MySite
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 font-medium">
                        {Navlinks}
                    </div>

                    {/* Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden  border-t">
                    <div className="flex flex-col space-y-4 p-4">
                        {Navlinks}
                        <Link
                            href="/login"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );

    }
    else{
        return <></>;
    }


   
}