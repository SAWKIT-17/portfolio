import Link from "next/link";
import React from "react";

export default function Topbar() {
    return (
        <div className="topbar flex flex-col md:flex-row w-full py-3 px-4 items-center md:items-start md:justify-between">
            <Link href="/" className="flex items-center">
                <span>Nicolas Wieckiewicz</span>
            </Link>
            <nav className="font-firacode-medium">
                <div>
                    <ul className="flex flex-row space-x-3 justify-center">
                        <li>
                            <span className="pointer-events-none touch-none select-none">/</span>
                            <span className="ml-3">Info</span>
                        </li>
                        <li>
                            <span className="pointer-events-none touch-none select-none">/</span>
                            <span className="ml-3">Projects</span>
                        </li>
                        <li>
                            <span className="pointer-events-none touch-none select-none">/</span>
                            <span className="ml-3">Contact</span>
                        </li>
                        <span className="pointer-events-none touch-none select-none">/</span>
                    </ul>
                </div>
            </nav>
        </div>
    );
}