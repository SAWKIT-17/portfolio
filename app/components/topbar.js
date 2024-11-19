import React from "react";

function Topbar() {
    return (
        <div className="topbar flex flex-col md:flex-row w-full py-3 px-4 items-center md:items-start md:justify-between">
            <a href="/" className="flex items-center">
                <p><span>Nicolas</span> <span>Wieckiewicz</span></p>
            </a>
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

export default Topbar;