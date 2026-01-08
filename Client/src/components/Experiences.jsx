import React from "react";
import "../styles/font.css";
import Modal from "../assets/Modal";
import { ModalContentsExp } from "../assets/Modal-contents-exp";

const Experiences = () => {

    const cellContent = (
        <>
            J'ai conçu des tableaux de bord Power BI percutants et <br />
            développé des requêtes SQL pour extraire des données complexes,<br />
            tout en créant des sites web et des applications légères<br />
            pour les petites entreprises. Mon expertise inclut<br />
            l'optimisation des visualisations et la personnalisation<br />
            des interfaces, en répondant aux besoins spécifiques<br />
            des clients et en assurant la maintenance continue.
        </>
    );

    return (
        <div id="experiences">
            <div className="flex justify-center mt-8">
                <div className="badge badge-outline badge-color-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="14" height="14"><path xmlns="http://www.w3.org/2000/svg" d="M44 19.34A2 2 0 0 0 42.28 18L30.9 16.34 25.8 6a2 2 0 0 0-3.6 0l-5.1 10.32L5.72 18a2 2 0 0 0-1.62 1.36 2 2 0 0 0 .5 2l8.26 8-2 11.36a2 2 0 0 0 .8 2 2 2 0 0 0 2.1.14L24 37.52l10.2 5.36a1.86 1.86 0 0 0 .92.24 2 2 0 0 0 1.18-.38 2 2 0 0 0 .8-2l-2-11.36 8.26-8a2 2 0 0 0 .64-2.04m-12.3 8a2 2 0 0 0-.58 1.78l1.44 8.38-7.52-4a2 2 0 0 0-1.88 0l-7.52 4 1.44-8.38a2 2 0 0 0-.58-1.78l-6-6 8.42-1.22a2 2 0 0 0 1.52-1.1L24 11.4l3.76 7.64a2 2 0 0 0 1.52 1.1l8.42 1.22z"></path></svg>                    Mes expériences
                </div>
            </div>
            <div className="overflow-x-auto md:mx-24 mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Entreprise</th>
                            <th>Position</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                <label>
                                    Fevrier 2022 -
                                    <br /> Jusqu'à ce jour
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="mask mask-squircle w-24 h-24"
                                        style={{
                                            backgroundImage: "url('/pictures/sct_logo.png')",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center"
                                        }}
                                    />
                                    <div>
                                        <div className="font-bold">Sécrétariat du conseil du trésor</div>
                                        <div className="text-sm opacity-50">Québec, Canada</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Analyste, <br /> développeur informatique
                                <br />
                                <span className="badge badge-ghost badge-sm flex items-center">Sénior</span>
                            </td>
                            {/* Version desktop - visible seulement à partir de md */}
                            <td className="hidden md:table-cell">
                                {cellContent}
                            </td>
                            {/* Version mobile - visible seulement en dessous de md */}
                            <td className="table-cell md:hidden">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="btn btn-sm btn-primary"
                                >
                                    Voir description
                                </button>
                            </td>
                            <th>
                                {/* Bouton pour ouvrir la modal */}
                                <button
                                    className="btn btn-ghost btn-sm bg-primary text-primary-content"
                                    onClick={() => document.getElementById('employee').showModal()}
                                >
                                    Détails
                                </button>
                                {/* Modal */}
                                <Modal id="employee" title="Stack Technique">
                                    {ModalContentsExp.employee}
                                </Modal>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <label>
                                    Octobre 2024 -
                                    <br /> Jusqu'à ce jour
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="mask mask-squircle w-24 h-24"
                                        style={{
                                            backgroundImage: "url('/pictures/freelance.png')",
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center"
                                        }}
                                    />
                                    <div>
                                        <div className="font-bold">Développeur indépendant</div>
                                        <div className="text-sm opacity-50">Québec, Canada</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Développeur BI, <br /> développeur web fullstack
                                <br />
                                <span className="badge badge-ghost badge-sm flex items-center"></span>
                            </td>
                            <td>J'ai conçu des tableaux de bord Power BI percutants et <br />développé des requêtes SQL pour extraire des données <br />complexes,
                                tout en créant des sites web et des applications <br />légères pour les petites entreprises.<br />
                                Mon expertise inclut l'optimisation des visualisations et <br /> la personnalisation des interfaces,
                                en répondant aux besoins <br />spécifiques des clients et en assurant la maintenance <br />continue des projets.
                            </td>
                            <th>
                                {/* Bouton pour ouvrir la modal */}
                                <button
                                    className="btn btn-ghost btn-sm bg-primary text-primary-content"
                                    onClick={() => document.getElementById('freelance').showModal()}
                                >
                                    Détails
                                </button>
                                {/* Modal */}
                                <Modal id="freelance" title="Stack Technique">
                                    {ModalContentsExp.freelance}
                                </Modal>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Experiences;