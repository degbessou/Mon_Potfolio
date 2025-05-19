import { useState } from 'react';

const UseModal = () => {
    const [activeModal, setActiveModal] = useState(null);

    const openModal = (stack) => {
        const modal = document.getElementById(stack);
        if (modal) modal.showModal();
        setActiveModal(stack);
    };

    const closeModal = () => {
        if (activeModal) {
            const modal = document.getElementById(activeModal);
            if (modal) modal.close();
        }
        setActiveModal(null);
    };

    return { activeModal, openModal, closeModal };
};

export default UseModal;