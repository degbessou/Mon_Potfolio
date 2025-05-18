
const Modal = ({ id, title, children }) => {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* Bouton de fermeture */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg text-center">{title}</h3>
                <fieldset className="fieldset bg-base-200 text-error-content border-base-300 rounded-box w-m border p-4">
                    <legend className="fieldset-legend font-light">FRONTEND</legend>
                    {children.front && <div className="py-2">{children.front}</div>}
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 text-error-content rounded-box w-m border p-4">
                    <legend className="fieldset-legend font-light">BACKEND</legend>
                    {children.back && <div className="py-2">{children.back}</div>}
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 text-error-content rounded-box w-m border p-4">
                    <legend className="fieldset-legend font-light">DONNÉES</legend>
                    {children.data && <div className="py-2">{children.data}</div>}
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 text-error-content rounded-box w-m border p-4">
                    <legend className="fieldset-legend font-light">OUTILS</legend>
                    {children.tools && <div className="py-2">{children.tools}</div>}
                </fieldset>
            </div>
        </dialog>
    );
};

export default Modal;