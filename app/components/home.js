import React from "react";

function Homepage() {
    return (
        <div>

            <div className="flex flex-row">
                <img className="w-40 h-min rounded-full" src="/nicolas_w.jpg"></img>
                <div className="ml-4">
                    <div className="flex flex-col align-middle">
                        <h1 className="">Développeur Full-Stack</h1>
                        <h2 className=""><span>Nicolas</span> <span>Wieckiewicz</span></h2>
                        <hr></hr>
                        <span>
                            Je suis un développeur full-stack passionné, avec une solide formation en IT & Réseaux. 
                            <br />
                            Après avoir travaillé pour des organisations prestigieuses comme la Commission européenne via Bryton Global et occupé un rôle de développeur et gestionnaire de projet chez Tafsquare, j'ai décidé de me lancer en tant que freelance. 
                            Polyvalent et autodidacte, j'explore des domaines variés tels que la programmation, l'IT, et les réseaux, avec une ambition de me spécialiser dans la cybersécurité et l'IA.
                            <br />
                            Je suis à votre service pour concrétiser vos projets web et IT avec professionnalisme et créativité.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;