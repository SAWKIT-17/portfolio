import React from "react";

function Homepage() {
    return (
        <div className="">
            <div className="flex flex-row">
                <img className="w-40 h-min" src="/nicolas_w.jpg"></img>
                <div className="ml-4">
                    <h1><span className="text-red-600">Nicolas</span> <span>Wieckiewicz</span></h1>
                </div>
            </div>
        </div>
    );
}

export default Homepage;