import React from "react";
import "../styles/font.css";
import { informationsData } from "../data/InformationsData";

const Informations = () => {
    return (
        <section className="bg-base-300 py-12" id="informations">
            {/* Badge */}
            <div className="flex justify-center mb-8">
                <div className="badge badge-outline badge-color-secondary">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                        <path d="m12,17v-5.5h-1.5" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="12" cy="7.25" r="1.25" fill="currentColor" />
                    </svg>
                    Informations
                </div>
            </div>

            {/* Container */}
            <div className="max-w-screen-xl mx-auto px-4 space-y-6">
                {[informationsData.proposals, informationsData.offers].map((section, idx) => (
                    <div
                        key={idx}
                        className="collapse collapse-plus bg-base-100 border border-base-300"
                    >
                        <input type="radio" name="information-accordion" defaultChecked={idx === 0} />
                        <div className="collapse-title font-semibold">
                            {section.title}
                        </div>

                        <div className="collapse-content">
                            <ul className="list bg-primary text-accent-content rounded-box shadow-md">
                                {section.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="list-row hover:bg-base-300 hover:text-neutral transition font-medium"
                                    >
                                        <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M6 3L20 12 6 21V3z" fill="currentColor" />
                                        </svg>
                                        <div>
                                            <strong>{item.title}</strong> : {item.text}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Informations;
