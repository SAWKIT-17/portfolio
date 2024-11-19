import React from "react";

function Info() {
    return (
        <div>
            <div className="flex flex-row mb-4">
                <img className="w-24 md:w-32 lg:w-36 min-h-24 rounded-full" src="/nicolas_w.jpg" alt="Nicolas Wieckiewicz"></img>
                <div className="flex flex-col justify-end ml-2 lg:ml-8 text-xl">
                    <p className="font-luciole-bold">Développeur Full-Stack</p>
                    <p className=""><span>Nicolas</span> <span className="uppercase">Wieckiewicz</span></p>
                    <hr className="border-accent"></hr>
                </div>
            </div>
            <span>
                {/* TODO: Color Highlight en jaune pâle terminal */}
                Je suis un <span className="text-highlight">développeur full-stack</span> passionné, avec une solide formation en <span className="text-highlight">IT & Réseaux</span>.
                <br />
                Après avoir travaillé pour des organisations prestigieuses comme la Commission européenne via Bryton Global en tant que <span className="text-highlight">technicien IT</span> et occupé un rôle de <span className="text-highlight">développeur</span> et <span className="text-highlight">gestion de projet</span> chez Tafsquare, j'ai décidé de me lancer en tant que freelance. 
                <span className="text-highlight">Polyvalent et autodidacte</span>, j'explore des domaines variés tels que la programmation, l'IT, et les réseaux, avec une ambition de me spécialiser dans la cybersécurité et l'IA.
                <br />
                Je suis à votre service pour concrétiser vos projets web et IT avec professionnalisme et créativité.
            </span>

            <div className="mt-4">
                <h1>Compétences</h1>
                {/* TODO: Mettre les compétences en format tableau avec les logos et catégories */}
            </div>
        </div>
    );
}

export default Info;