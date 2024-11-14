import React from "react";

function Topbar() {
    return (
        <div className="topbar flex flex-row w-full py-3 px-4 justify-between">
            <a className="flex items-center">
                <h1>Nicolas Wieckiewicz</h1>
            </a>
            <nav className="font-firacode-medium">
                <div className="flex flex-col justify-center mr-3">
                    <ul className="flex flex-row space-x-3 justify-center mr-3">
                        <li>
                            <span>/</span>
                            <span className="ml-3">Info</span>
                        </li>
                        <li>
                            <span>/</span>
                            <span className="ml-3">Projects</span>
                        </li>
                        <li>
                            <span>/</span>
                            <span className="ml-3">Contact</span>
                        </li>
                        <span>/</span>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Topbar;