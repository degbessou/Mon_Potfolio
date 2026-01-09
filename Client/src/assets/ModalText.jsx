
const ModalText = ({ id, title, children }) => {
    return (
        <dialog id={id} className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* Bouton de fermeture */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg text-center pb-2">{title}</h3>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-m border px-4 pt-0">
                    <div className="py-2 font-bold">{children}</div>
                </fieldset>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default ModalText;