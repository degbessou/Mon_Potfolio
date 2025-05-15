import React from "react";
import "../styles/font.css";

const Experiences = () => {
    return (
        <div >
            <div className="flex justify-center mt-8">
                <div className="badge badge-outline badge-color-secondary">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    Mes expériences
                </div>
            </div>
            <div className="overflow-x-auto mx-24 mt-10">
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
                            <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium,
                                totam rem aperiam, <br /> eaque ipsa quae ab illo inventore veritatis et quasi architecto <br /> beatae vitae dicta sunt explicabo.</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Stack</button>
                            </th>
                        </tr>{/* row 2 */}
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
                            <td>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium,
                                totam rem aperiam, <br /> eaque ipsa quae ab illo inventore veritatis et quasi architecto <br /> beatae vitae dicta sunt explicabo.</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Stack</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Experiences;