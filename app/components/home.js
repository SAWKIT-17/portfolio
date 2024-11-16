import React from "react";

function Homepage() {
    return (
        <div>
            <div className="flex flex-row">
                <img className="w-40 h-min rounded-full" src="/nicolas_w.jpg"></img>
                <div className="ml-4">
                    <div className="flex flex-row align-middle">
                        <img className="w-6 h-6" src="/icons/person.svg" />
                        <h1 className=""><span>Nicolas</span> <span>Wieckiewicz</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;