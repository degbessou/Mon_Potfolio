import React from "react";
import Modal from "../assets/Modal";
import { ModalContentsExp } from "../data/Modal-contents-exp";
import { experiencesData } from "../data/ExperiencesData";
import ModalText from "../assets/ModalText";

const Experiences = () => {

    return (
        /* SECTION FULL WIDTH */
        <section id="experiences" className="w-full bg-base-300 py-4">

            {/* CONTAINER */}
            <div className="mx-auto max-w-screen-xl px-2">

                {/* TITLE */}
                <div className="flex justify-center mt-8 pb-6">
                    <div className="badge badge-outline badge-color-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="14" height="14"><path xmlns="http://www.w3.org/2000/svg" d="M44 19.34A2 2 0 0 0 42.28 18L30.9 16.34 25.8 6a2 2 0 0 0-3.6 0l-5.1 10.32L5.72 18a2 2 0 0 0-1.62 1.36 2 2 0 0 0 .5 2l8.26 8-2 11.36a2 2 0 0 0 .8 2 2 2 0 0 0 2.1.14L24 37.52l10.2 5.36a1.86 1.86 0 0 0 .92.24 2 2 0 0 0 1.18-.38 2 2 0 0 0 .8-2l-2-11.36 8.26-8a2 2 0 0 0 .64-2.04m-12.3 8a2 2 0 0 0-.58 1.78l1.44 8.38-7.52-4a2 2 0 0 0-1.88 0l-7.52 4 1.44-8.38a2 2 0 0 0-.58-1.78l-6-6 8.42-1.22a2 2 0 0 0 1.52-1.1L24 11.4l3.76 7.64a2 2 0 0 0 1.52 1.1l8.42 1.22z"></path></svg>                    Mes expériences
                    </div>
                </div>

                {/* EXPERIENCES */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                    {experiencesData.map((exp, index) => (
                        <div key={index} className="card bg-base-100 shadow-sm w-full">
                            <div className="card-body p-4">

                                {/* HEADER */}
                                <div className="flex justify-between items-start gap-2">

                                    <div className="flex items-center gap-4">

                                        {/* LOGO – visible uniquement lg+ */}
                                        <div
                                            className="hidden lg:block mask mask-squircle w-14 h-14"
                                            style={{
                                                backgroundImage: `url(${exp.logo})`,
                                                backgroundSize: "contain",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center",
                                            }}
                                        />

                                        <div>
                                            <h3 className="font-bold text-lg">{exp.entreprise}</h3>
                                            <p className="text-sm opacity-60">{exp.location}</p>
                                        </div>
                                    </div>

                                    <span className="badge badge-ghost text-xs">
                                        {exp.date}
                                    </span>
                                </div>

                                {/* POSITION */}
                                <div className="mt-4">
                                    <p className="font-medium">{exp.position}</p>
                                    {exp.level && (
                                        <span className="badge badge-outline badge-sm mt-2">
                                            {exp.level}
                                        </span>
                                    )}
                                </div>

                                {/* DESCRIPTION – visible uniquement lg+ */}
                                <p className="mt-2 text-sm opacity-80 hidden lg:block whitespace-pre-line">
                                    {exp.description}
                                </p>

                                {/* ACTIONS */}
                                <div className="card-actions justify-end mt-3 gap-2">

                                    {/* Voir description – md & sm */}
                                    <button
                                        className="btn btn-sm btn-ghost lg:hidden"
                                        onClick={() =>
                                            document.getElementById(`desc-${index}`).showModal()
                                        }
                                    >
                                        Voir description
                                    </button>

                                    {/* Détails */}
                                    <button
                                        className="btn btn-sm btn-primary"
                                        onClick={() =>
                                            document.getElementById(exp.details).showModal()
                                        }
                                    >
                                        Détails
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* MODALS DESCRIPTION (mobile) */}
                {experiencesData.map((exp, index) => (
                    <ModalText
                        key={`desc-${index}`}
                        id={`desc-${index}`}
                        title="Description"
                    >
                        <p className="whitespace-pre-line text-sm">
                            {exp.description}
                        </p>
                    </ModalText>
                ))}


                {/* MODALS DETAILS */}
                {experiencesData.map((exp) => (
                    <Modal key={exp.details} id={exp.details} title="Stack Technique">
                        {ModalContentsExp[exp.details]}
                    </Modal>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
