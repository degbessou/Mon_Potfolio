import React from "react";
import "../styles/font.css";

const Projects = () => {
    const tableItems = [
        {
            name: "Liam James",
            desc: "liamjames@example.com"
        },
        {
            name: "Olivia Emma",
            desc: "oliviaemma@example.com"
        },
        {
            name: "William Benjamin",
            desc: "william.benjamin@example.com"
        },
    ]

    return (
        <div>
            <div className="flex justify-center mt-8">
                <div className="badge badge-outline badge-color-secondary">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    Mes projets
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
                            <th>Lien</th>
                            <th>Stack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableItems.map((item, index) => (
                            <tr key={index} className="hover:bg-base-300">
                                <th>
                                    <label>{index + 1}</label>
                                </th>
                                <td>{item.name}</td>
                                <td>{item.desc}</td>
                                <td >
                                    <a href="javascript:void()" className="link link-secondary">Voir</a>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Détails</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Projects;