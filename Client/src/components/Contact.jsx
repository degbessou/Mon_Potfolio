import React, { useState, useEffect } from "react";
import "../styles/font.css";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const [alert, setAlert] = useState({ show: false, message: "", type: "" });
    const [errors, setErrors] = useState({
        user_name: false,
        user_org: false,
        user_email: false,
        message: false
    });

    useEffect(() => {
        let timer;
        if (alert.show) {
            timer = setTimeout(() => {
                setAlert({ show: false, message: "", type: "" });
            }, 5000);
        }
        return () => clearTimeout(timer); // Nettoyage du timeout si le composant est démonté
    }, [alert.show]);

    // Fonction de validation personnalisée
    const validateForm = (formData) => {
        const newErrors = {
            user_name: false,
            user_org: false,
            user_email: false,
            message: false
        };
        const errorMessages = [];

        // Validation du nom (requis)
        if (!formData.user_name || formData.user_name.trim() === '') {
            newErrors.user_name = true;
            errorMessages.push('Le nom est requis');
        }

        // Validation de l'organisation (requis)
        if (!formData.user_org || formData.user_org.trim() === '') {
            newErrors.user_org = true;
            errorMessages.push('L\'organisation est requise');
        }

        // Validation de l'email (requis et format)
        if (!formData.user_email || formData.user_email.trim() === '') {
            newErrors.user_email = true;
            errorMessages.push('L\'email est requis');
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.user_email)) {
                newErrors.user_email = true;
                errorMessages.push('Format d\'email invalide');
            }
        }

        // Validation du message (requis et longueur minimale)
        if (!formData.message || formData.message.trim() === '') {
            newErrors.message = true;
            errorMessages.push('Le message est requis');
        } else if (formData.message.trim().length < 10) {
            newErrors.message = true;
            errorMessages.push('Le message doit contenir au moins 10 caractères');
        }

        setErrors(newErrors);
        return errorMessages;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Récupération des données du formulaire
        const formData = {
            user_name: e.target.user_name.value,
            user_prenom: e.target.user_prenom.value,
            user_org: e.target.user_org.value,
            user_email: e.target.user_email.value,
            message: e.target.message.value
        };

        // Validation du formulaire
        const errors = validateForm(formData);

        if (errors.length > 0) {
            // Affichage de l'alerte de validation
            setAlert({
                show: true,
                message: errors.join(', '),
                type: 'warning'
            });

            return; // Arrêter l'exécution si il y a des erreurs
        }

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                setAlert({ show: true, message: "Votre message a été envoyé avec succès", type: "success" });
                //setTimeout(() => ({ show: false, message: "", type: "" }), 1000);
            }
                , (error) => {
                    setAlert({ show: true, message: "Une erreur s'est produite. Veuillez réessayer.", type: "error" });
                    //setTimeout(() => ({ show: false, message: "", type: "" }), 5000);
                });
        e.target.reset();
    }

    return (
        <div className="bg-base-100 flex flex-col items-center py-4" id="contact">
            {/* Composant d'alerte */}
            {alert.show && (
                <div role="alert" className={`alert ${alert.type === "success" ? "alert-success" : alert.type === "warning" ? "alert-warning" : "alert-error"} fixed top-4 right-4 z-50 w-auto`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-current">
                        {alert.type === "warning" ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        )}
                    </svg>
                    <span>{alert.message}</span>
                    <button
                        className="btn btn-sm btn-ghost"
                        onClick={() => setAlert({ show: false, message: "", type: "" })}
                    >
                        ✕
                    </button>
                </div>
            )}
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
                <form className="contact_form" onSubmit={sendEmail} noValidate>
                    <div className="grid grid-cols-2 gap-4 pb-8">
                        <div>
                            <input type="text" name="user_name" className={`input w-auto border-primary ${errors.user_name ? 'input-error' : ''}`} placeholder="Nom" />                        </div>
                        <div>
                            <input type="text" name="user_prenom" className="input border-primary" placeholder="Prénom" />
                        </div>
                    </div>
                    <div className="grid grid-rows-3">
                        <input type="text" name="user_org" className={`input w-auto border-primary ${errors.user_org ? 'input-error' : ''}`} placeholder="Organisation" />

                        <input type="email" name="user_email" className={`input w-auto border-primary ${errors.user_email ? 'input-error' : ''}`} placeholder="Email" />

                        <textarea name="message" className={`textarea textarea-xl w-auto border-primary py-0 ${errors.message ? 'textarea-error' : ''}`} placeholder="Message" minLength="10" />                    </div>

                    <button type="submit" className="btn btn-primary hover:bg-base-200 hover:text-neutral hover:font-bold transition-colors duration-300 mt-4">Envoyer</button>
                </form>
            </fieldset>
        </div>
    )
}

export default Contact;