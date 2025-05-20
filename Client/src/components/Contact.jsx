import React from "react";
import "../styles/font.css";

const Contact = () => {
    return (
        <div className="bg-base-100 flex flex-col items-center py-4">
            <div className="flex justify-center mt-6 pb-4">
                <div className="badge badge-outline badge-color-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="14" height="14"><g xmlns="http://www.w3.org/2000/svg" fill="currentColor" transform="scale(3)"><path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path><path fill-rule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"></path></g></svg>                    Contact
                </div>
            </div>
            <fieldset className="fieldset bg-white-100 border-base-300 rounded-box w-lg p-4">
                <div className="max-w-lg mx-auto sm:text-center">
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Collaborons
                    </p>
                    <p className="text-lg py-6">
                        Prêt à transformer vos idées en solutions ? Contactez moi.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pb-4">
                    <div>
                        <input type="text" className="input border-primary" placeholder="Nom" />
                    </div>
                    <div>
                        <input type="text" className="input border-primary" placeholder="Prénom" />
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-2">
                    <input type="text" className="input w-auto border-primary" placeholder="Organisation" />

                    <input type="email" className="input w-auto border-primary" placeholder="Email" />

                    <input type="text" className="input input-xl w-auto border-primary" placeholder="Message" />
                </div>

                <button className="btn btn-primary hover:bg-base-200 hover:text-neutral hover:font-bold transition-colors duration-300 mt-4">Envoyer</button>
            </fieldset>
        </div>
    )
}

export default Contact;