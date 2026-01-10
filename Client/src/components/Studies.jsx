import React from "react";
import "../styles/font.css";
import Card from "../assets/Cards";
import { studiesData } from "../data/StudiesData";

const Studies = () => {
    return (
        <section className="bg-base-300 py-6" id="education">
            {/* CONTAINER */}
            <div className="mx-auto max-w-screen-xl">
                {/* DIV 1 : Header */}
                <div className="flex justify-center mb-6">
                    <div className="badge badge-outline badge-color-secondary">
                        Mes études
                    </div>
                </div>

                {/* DIV 2 : Contenu */}
                <div className="mx-4 md:mx-16 lg:mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {studiesData.map((item, idx) => (
                            <Card
                                key={idx}
                                icon={item.icon}
                                title={item.title}
                                school={item.school}
                                description={item.description}
                                date={item.date}
                                location={item.location}
                                status={item.status}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Studies;