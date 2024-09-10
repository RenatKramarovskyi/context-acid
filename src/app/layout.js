'use client'

import Navbar from "@/components/Navbar/Navbar";
import {createContext, useState} from "react";
import './Global.css';
import Modal from "@/components/Modal/Modal";



export const SettingsContext = createContext({ theme : "Dark", setTheme: (theme) => {}});
export const ModalContext = createContext({ isOpen : false, setIsOpen: () => {}});

export default function RootLayout({ children }) {

    const [theme, setTheme] = useState('Dark')
    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
        setIsOpen(prevState => !prevState);
        console.log('toggled')
    }

    return (

        <html lang="en">
        <SettingsContext.Provider value={{theme, setTheme}}>
            <ModalContext.Provider value={{ isOpen, setIsOpen: toggleModal }}>
                {/*{console.log(theme)}*/}
                <body>
                    <Navbar/>
                    {children}
                    <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
                </body>
            </ModalContext.Provider>
        </SettingsContext.Provider>

        </html>
    );
}

