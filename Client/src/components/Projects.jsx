import React from "react";
import "../styles/font.css";
import UseModal from "../hooks/UseModal";
import Modal from "../assets/Modal";
import { ModalContentsPro } from "../assets/Modal-contents-pro";


const Projects = () => {

    const { openModal } = UseModal();

    const tableItems = [
        {
            name: "Tableau de bord Draft NFL 2024",
            desc: "Développement d'un tableau de bord interactif analysant &#13; les données de la draft NFL 2024",
            stack: "draftnfl24",
            statut: "Terminé",
            statut_color: "success",
            link: "https://github.com/degbessou/Dashboard.git"
        },
        {
            name: "Tableau de bord Draft NFL 2025",
            desc: "Développement d'un tableau de bord interactif analysant &#13; les données de la draft NFL 2025",
            stack: "draftnfl25",
            statut: "Terminé",
            statut_color: "success",
            link: "https://github.com/degbessou/draft_nfl_2025.git"

        },
        {
            name: "Portfolio personnel",
            desc: "Création d'un portfolio personnel mettant en valeur &#13; mes compétences et projets.",
            stack: "portfolio",
            statut: "Terminé",
            statut_color: "success",
            link: "#"
        },
        {
            name: "Site vitine EasyTech",
            desc: "Conception et développement d'une plateforme web &#13; professionnelle pour une entreprise de technologies web abordable.",
            stack: "easyteck",
            statut: "En cours",
            statut_color: "warning",
            link: "#"
        }
    ]


    return (
        <div className="bg-base-200">
            <div className="flex justify-center pt-8">
                <div className="badge badge-outline badge-color-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="14" height="14"><path xmlns="http://www.w3.org/2000/svg" d="M42 8h-6V6a2 2 0 0 0-2-2H14a2 2 0 0 0-2 2v2H6a2 2 0 0 0-2 2v6a8 8 0 0 0 8 8h3.08A12 12 0 0 0 22 27.82V32h-2a6 6 0 0 0-6 6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a6 6 0 0 0-6-6h-2v-4.18A12 12 0 0 0 32.92 24H36a8 8 0 0 0 8-8v-6a2 2 0 0 0-2-2M12 20a4 4 0 0 1-4-4v-4h4v4a12 12 0 0 0 .7 4zm16 16a2 2 0 0 1 2 2v2H18v-2a2 2 0 0 1 2-2zm4-20a8 8 0 0 1-16 0V8h16zm8 0a4 4 0 0 1-4 4h-.7a12 12 0 0 0 .7-4v-4h4z"></path></svg>                    Mes projets
                </div>
            </div>
            <div className="overflow-x-auto mx-24 mt-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Statut</th>
                            <th>Lien</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableItems.map((item, index) => (
                            <tr key={index} className="hover:bg-base-300">
                                <th>
                                    <label>{index + 1}</label>
                                </th>
                                {/*name*/}
                                <td className="font-bold">{item.name}</td>
                                {/*desc*/}
                                <td>    {item.desc.split('&#13;').map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                                </td>
                                {/*statut*/}
                                <td className={`badge badge-outline badge-${item.statut_color} m-6`}>{item.statut}</td>
                                {/*lien*/}
                                <td >
                                    <a href={`${item.link}`} className="link link-hover font-bold text-neutral">Voir</a>
                                </td>
                                {/*stack*/}
                                <td>
                                    <button
                                        className="btn btn-ghost btn-sm bg-primary text-primary-content"
                                        onClick={() => openModal(item.stack)} // Modifiez cette ligne
                                    >
                                        Détails
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {tableItems.map((item) => {
                    const modalContent = ModalContentsPro[item.stack];
                    return (
                        <Modal
                            key={item.stack}
                            id={item.stack}
                            title={`Stack Technique`}
                        >
                            {{
                                front: modalContent.front,
                                back: modalContent.back,
                                data: modalContent.data,
                                tools: modalContent.tools
                            }}
                        </Modal>
                    );
                })}
            </div >
        </div >
    );
}

export default Projects;