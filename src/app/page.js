'use client'

import { useContext } from 'react';
import Modal from "@/components/Modal/Modal";
import { ModalContext } from "@/app/layout";

export default function Home() {
    const { isOpen, setIsOpen } = useContext(ModalContext);

    return (
        <div>
            <p>works</p>

        </div>
    );
}
