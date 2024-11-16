import React from "react";

function Homepage() {
    return (
        <div>

            <div className="flex flex-row mb-2 md:mb-4">
                <img className="w-24 md:w-32 lg:w-36 min-h-24 rounded-full" src="/nicolas_w.jpg" alt="Nicolas Wieckiewicz"></img>
                <div className="flex flex-col justify-end ml-2 lg:ml-8">
                    <h1 className="">Développeur Full-Stack</h1>
                    <h2 className=""><span>Nicolas</span> <span>Wieckiewicz</span></h2>
                    <hr className="border-accent"></hr>
                </div>
            </div>
            <span>
                Je suis un développeur full-stack passionné, avec une solide formation en IT & Réseaux. 
                <br />
                Après avoir travaillé pour des organisations prestigieuses comme la Commission européenne via Bryton Global et occupé un rôle de développeur et gestionnaire de projet chez Tafsquare, j'ai décidé de me lancer en tant que freelance. 
                Polyvalent et autodidacte, j'explore des domaines variés tels que la programmation, l'IT, et les réseaux, avec une ambition de me spécialiser dans la cybersécurité et l'IA.
                <br />
                Je suis à votre service pour concrétiser vos projets web et IT avec professionnalisme et créativité.
            </span>
        </div>
    );
}

export default Homepage;