'use client'

import React from 'react';
import cl from './Modal.module.css';

const Modal = ({ isOpen, setIsOpen }) => {
    return (
        <div className={isOpen ? cl.overlay : cl.disable} onClick={() => setIsOpen(false)}>
            <div className={cl.modal} onClick={event => event.stopPropagation()}>
                <div className={cl.modalHeader}>
                    <div style={{ userSelect: "none" }}>MY MODAL</div>
                    <div className={cl.closeButton} onClick={() => setIsOpen(false)}>X</div>
                </div>
                <div className={cl.gifBlock}>
                    <img draggable="false" src="https://media1.tenor.com/m/a4B3gu0RUl8AAAAC/slay-queen.gif" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Modal;
