
const Modal = ({ id, title, front, back, data }) => {
    return (
        <dialog id={id} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <form method="dialog">
                    {/* Bouton de fermeture */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                    </button>
                </form>
                <h3 className="font-bold text-lg">{title}</h3>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">frontend</legend>
                    {front && <div className="py-4">{front}</div>}
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">backend</legend>
                    {back && <div className="py-4">{back}</div>}
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">data</legend>
                    {data && <div className="py-4">{data}</div>}
                </fieldset>
            </div>
        </dialog>
    );
};

export default Modal;