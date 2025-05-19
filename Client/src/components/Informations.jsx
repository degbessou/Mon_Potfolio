import React from "react";
import "../styles/font.css";

const Informations = () => {

    const infoItems = [
        {
            title: "Ce que vous avez à me proposer.",
            desc: "Click the 'Sign Up' button in the top right corner and follow the registration process."
        },
        {
            title: "Ce que j'ai à vous offrir.",
            desc: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email."

        }
    ]

    return (
        <div className="bg-base-200 mb-8">
            <div className="flex justify-center pt-8 mt-8">
                <div className="badge badge-outline badge-color-secondary">
                    <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></circle><path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="currentColor" strokeLinecap="square" stroke-miterlimit="10" strokeWidth="2"></path><circle cx="12" cy="7.25" r="1.25" fill="currentColor" strokeWidth="2"></circle></g></svg>
                    Informations
                </div>
            </div>
            <div className="bg-base-200 mx-48 [&>*]:my-4">
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold">Ce que vous avez à me proposer.</div>
                    <div className="collapse-content text-sm">
                        <ul className="list bg-primary text-accent-content rounded-box shadow-md">
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Flexibilité de collaboration</strong> : Temps partiel, temps plein, consultation ou forfait - je m'adapte avec enthousiasme !</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Travail à distance</strong> : Pour une productivité optimale, où que vous soyez ! Tout en respectant mes engagements actuels.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Horaires adaptables</strong> : Trouvons ensemble les meilleurs moments pour faire avancer vos projets.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Autonomie et communication</strong> : Indépendance professionnelle avec des échanges efficaces et ciblés.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Contrats bien définis</strong> : Des objectifs clairs pour une collaboration transparente.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Visibilité</strong> : Possibilité de mentionner les projets dans mon portfolio.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Apprentissage</strong> : Développement continu des compétences.</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold"> Ce que j'ai à vous offrir.</div>
                    <div className="collapse-content text-sm">
                        <ul className="list bg-primary text-accent-content rounded-box shadow-md">
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Expertise en données</strong> : Transformation de vos données brutes en tableaux de bord stratégiques et décisionnels.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Développement web</strong> : Création d'interfaces fonctionnelles et intuitives guidées par une conception réfléchie.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Communication bilingue</strong> : Capacité à échanger et collaborer efficacement en français et dans un anglais fonctionnel.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Tarification adaptée</strong> : Structure de prix avantageuse en contrepartie de la flexibilité horaire et du travail à distance.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Performance sous toutes conditions</strong> : Capacité éprouvée à livrer d'excellents résultats, avec ou sans pression.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Visibilité</strong> : Possibilité de mentionner les projets dans mon portfolio.</div>
                            </li>
                            <li className="list-row hover:bg-base-300 hover:text-neutral hover:font-bold">
                                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                <div> <strong>Engagement qualité</strong> : Un travail méticuleux et des livrables qui dépassent les attentes.</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Informations;