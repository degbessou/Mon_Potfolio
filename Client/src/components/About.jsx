import React from "react";
import "../styles/font.css";

const About = () => {

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="hero bg-base-200 min-h-[600px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="./pictures/photo_cr.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="font-agrandir-narrow font-semibold">
                    <h1 className="text-5xl font-bold">Salut, moi c'est Donald !</h1>
                    <p className="text-justify py-6">
                        Développeur informatique à Québec, je transforme les données en tableaux de bord stratégiques.
                        Expert en analyse de données et novice enthousiaste en création d'applications pour le web, j'adopte une approche où la conception guide le développement.
                        Que vous recherchiez des visualisations de données percutantes ou des interfaces web fonctionnelles, ma méthode canadienne combine rigueur et créativité pour répondre à vos attentes.
                        Bienvenue dans mon univers où l'expertise en données rencontre ma passion pour le développement web !
                    </p>
                    <button className="btn btn-primary hover:bg-base-200 hover:text-neutral hover:font-bold transition-colors duration-300 w-full md:w-auto" href="#contact"
                        onClick={(e) => handleSmoothScroll(e, 'contact')}>Travaillez avec moi</button>
                </div>
            </div>
        </div>
    );
};

export default About;