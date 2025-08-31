"use client";

import {useState, useEffect} from "react";
import Link from "next/link";

export default function Navbar() {
    const [lastScroll, setLastScroll] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            let currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                setHidden(false);
            } else if (currentScroll > lastScroll) {
                setHidden(true);
            } else {
                setHidden(false);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);

        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    return (
        <div
            className={`text-black navbar bg-[#fff6e9] shadow-sm fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
            hidden
                ? "-translate-y-full"
                : "translate-y-0"}`}>
            {/* Left */}
            <div className="flex-1 ml-4 md:ml-14">
                <Link href="/" className="btn btn-ghost text-2xl">
                    Cemil
                </Link>
            </div>

            {/* Right desktop menu */}
            <div className="hidden md:flex flex-none mr-10">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/kripik">Kripik</Link>
                    </li>
                    <li>
                        <Link href="/stik">Stik</Link>
                    </li>
                    {/*<li>
                        <details>
                            <summary>Kripik</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li>
                                    <Link href="/kripik">Link 1</Link>
                                </li>
                                <li>
                                    <Link href="/kripik/link2">Link 2</Link>
                                </li>
                            </ul>
                        </details>
                    </li>*/}
                </ul>
            </div>

            {/* Mobile menu (hamburger) */}
            <div className="md:hidden flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="text-black bg-white menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Kripik</summary>
                                <ul className="p-2">
                                    <li>
                                        <Link href="/kripik/link1">Link 1</Link>
                                    </li>
                                    <li>
                                        <Link href="/kripik/link2">Link 2</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Stik</summary>
                                <ul className="p-2">
                                    <li>
                                        <Link href="/stik/link1">Link 1</Link>
                                    </li>
                                    <li>
                                        <Link href="/stik/link2">Link 2</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
