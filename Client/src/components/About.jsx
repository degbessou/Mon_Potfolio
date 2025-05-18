import React from "react";
import "../styles/font.css";

const About = () => {

    return (
        <div className="hero bg-base-200 min-h-[600px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="./pictures/photo.jpeg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="font-agrandir-narrow font-semibold">
                    <h1 className="text-5xl font-bold">Salut, moi c'est Donald !</h1>
                    <p className="text-justify py-6">
                        Développeur informatique à Québec, je transforme les données en tableaux de bord stratégiques.
                        <br />Expert en analyse de données et novice enthousiaste en création d'applications pour le web, <br /> j'adopte une approche où la conception guide le développement.
                        <br />Que vous recherchiez des visualisations de données percutantes ou des interfaces web fonctionnelles, <br /> ma méthode canadienne combine rigueur et créativité pour répondre à vos attentes.
                        <br />Bienvenue dans mon univers où l'expertise en données rencontre ma passion pour le développement web !
                    </p>
                    <button className="btn btn-primary hover:text-accent transition-colors duration-300">Travaillez avec moi</button>
                </div>
            </div>
        </div>
    );
};

export default About;