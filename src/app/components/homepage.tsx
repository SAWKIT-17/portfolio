import React from "react";
import Image from "next/image";

function Homepage() {
    return (
        <div className="w-full h-full flex flex-row">
            <div className="w-auto h-full flex flex-col justify-center text-center lg:text-start">
                <span className="mb-4 text-4xl bg-gradient-to-l bg-clip-text text-transparent from-violet-700 to-blue-300">Besoin d&apos;un développeur ?</span>
                <span className="text-6xl">Nicolas Wieckiewicz</span>
            </div>
            <div className="hidden md:flex flex-row ml-auto">
            <div className="pointer-events-none fixed bottom-0 mx-auto h-full w-3/4 max-w-screen-2xl -rotate-2 touch-none rounded-l-full bg-gradient-to-tr opacity-25 blur-[2rem] from-blue-600 to-violet-700"></div>
                <div className="flex flex-col justify-center">
                    <Image src="/nicolas_w.webp" width={580} height={580} alt="Nicolas Wieckiewicz" className="w-100 -scale-x-100" /> {/* TODO: Remplacer l'image du type par moi */}
                </div>
                <div className="flex flex-row justify-center">
                    <Image src="/vercel.svg" width={240} height={240} alt="Vercel" />
                    <Image src="/next.svg" width={240} height={240} alt="NextJS" className="invert" /> {/* TODO: Mettre logo de tout les techno que je connais derrière moi */}
                </div>
            </div>
        </div>
    );
}

export default Homepage;