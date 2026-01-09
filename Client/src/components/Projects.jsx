import React from "react";
import "../styles/font.css";
import UseModal from "../hooks/UseModal";
import ModalText from "../assets/ModalText"; // Modal pour description
import Modal from "../assets/Modal";
import { projectsData } from "../data/ProjectsData";
import { ModalContentsPro } from "../data/Modal-contents-pro";

const Projects = () => {
    const { openModal } = UseModal();

    return (
        <section id="projets" className="w-full bg-base-200 py-4">
            {/* CONTAINER */}
            <div className="mx-auto max-w-screen-xl px-2">
                {/* TITLE */}
                <div className="flex justify-center mt-8">
                    <div className="badge badge-outline badge-color-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="14"
                            height="14"
                        >
                            <path d="M42 8h-6V6a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v2H6a2 2 0 0 0-2 2v6a8 8 0 0 0 8 8h3.08A12 12 0 0 0 22 27.82V32h-2a6 6 0 0 0-6 6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a6 6 0 0 0-6-6h-2v-4.18A12 12 0 0 0 32.92 24H36a8 8 0 0 0 8-8v-6a2 2 0 0 0-2-2M12 20a4 4 0 0 1-4-4v-4h4v4a12 12 0 0 0 .7 4zm16 16a2 2 0 0 1 2 2v2H18v-2a2 2 0 0 1 2-2zm4-20a8 8 0 0 1-16 0V8h16zm8 0a4 4 0 0 1-4 4h-.7a12 12 0 0 0 .7-4v-4h4z"></path>
                        </svg>{" "}
                        Mes projets
                    </div>
                </div>

                {/* PROJECTS */}
                <div className="mx-auto max-w-screen-xl px-2 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {projectsData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-base-100 outline outline-neutral-300 p-4 shadow-sm rounded-md flex flex-col justify-between hover:shadow-md"
                        >
                            {/* HEADER */}
                            <div className="flex justify-between items-start gap-2">
                                <h3 className="font-semibold text-base">{project.name}</h3>
                                <span
                                    className={`badge badge-outline text-xs ${project.statut_color === "success"
                                        ? "badge-success"
                                        : project.statut_color === "warning"
                                            ? "badge-warning"
                                            : "badge-info"
                                        }`}
                                >
                                    {project.statut}
                                </span>
                            </div>

                            {/* DESCRIPTION – lg+ */}
                            <p className="text-sm opacity-80 mt-2 hidden lg:block whitespace-pre-line leading-snug">
                                {project.desc}
                            </p>

                            {/* ACTIONS */}
                            <div className="flex flex-wrap justify-end gap-2 mt-4">
                                {/* Voir description – md & sm */}
                                <button
                                    className="btn btn-sm btn-primary lg:hidden"
                                    onClick={() =>
                                        document.getElementById(`desc-${index}`).showModal()
                                    }
                                >
                                    Voir description
                                </button>

                                {/* Lien */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-ghost"
                                >
                                    Aperçu
                                </a>

                                {/* Stack */}
                                <button
                                    className="btn btn-sm btn-outline"
                                    onClick={() => openModal(project.stack)}
                                >
                                    Détails
                                </button>
                            </div>

                            {/* Modal Description */}
                            <ModalText id={`desc-${index}`} title="Description">
                                {project.desc}
                            </ModalText>
                        </div>
                    ))}
                </div>

                {/* Modals Stack Technique */}
                {projectsData.map((project) => {
                    const modalContent = ModalContentsPro[project.stack];
                    return (
                        <Modal
                            key={project.stack}
                            id={project.stack}
                            title="Stack Technique"
                        >
                            {modalContent}
                        </Modal>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
