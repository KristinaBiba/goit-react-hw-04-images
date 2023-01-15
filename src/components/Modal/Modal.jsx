import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');

export function Modal({ toggleModal, src }) {

    useEffect(() => {
        window.addEventListener('keydown', handleEsc)

        return () => { window.removeEventListener('keydown', handleEsc) }
    },);

    const handleEsc = (e) => {
        if (e.code === "Escape") {
            toggleModal();
        }
    };

    const handleBackdrop = (e) => {
        if (e.currentTarget === e.target) {
            toggleModal();
        }
    };
    
        return createPortal(<div className="overlay" onClick={handleBackdrop}>
            <div className="modal">
                <img src={src} alt="" />
            </div>
        </div>, modalRoot);
    }