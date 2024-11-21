import React from "react";
// TODO : next/image pour remplacer les balises img

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
                    <img className="w-100 -scale-x-100" src="/nicolas_w.webp" alt="Nicolas Wieckiewicz" /> {/* TODO: Remplacer l'image du type par moi */}
                </div>
                <div className="flex flex-row justify-center">
                    <img className="w-60" src="/vercel.svg" alt="Vercel" />
                    <img className="w-60 invert" src="/next.svg" alt="NextJS" /> {/* TODO: Mettre logo de tout les techno que je connais derrière moi */}
                </div>
            </div>
        </div>
    );
}

export default Homepage;