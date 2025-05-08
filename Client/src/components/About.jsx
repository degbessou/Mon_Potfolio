import React from "react";
import "../styles/font.css";

const About = () => {

    return (
        <div className="hero bg-base-200 min-h-[600px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="font-agrandir-narrow font-semibold">
                    <h1 className="text-5xl font-bold">Salut, moi c'est Donald!</h1>
                    <p className="py-6">
                        Je suis développeur informatique à Québec.
                        <br />Je suis passionné par la data mais je conçois aussi des applications pour le web
                        <br />avec un état d'esprit axé sur la conception d'abord.
                        <br />Bienvenue sur mon portfolio.
                    </p>
                    <button className="btn btn-primary">Travaillez avec moi</button>
                </div>
            </div>
        </div>
    );
};

export default About;