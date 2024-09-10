'use client'

import './Navbar.css';
import { useContext } from "react";
import { ModalContext, SettingsContext } from "@/app/layout";

const Navbar = () => {
    const { theme, setTheme } = useContext(SettingsContext);
    const { isOpen, setIsOpen } = useContext(ModalContext);

    console.log(`isOpen from Navbar: ${isOpen}`);

    return (
        <div>
            <div className={`navbar${theme}`}>
                <a className={`navbar_links exit clickable`}>EXIT</a>
                <div
                    className={`navbar_links`}
                    onClick={() => setTheme(theme === "Dark" ? "Light" : "Dark")}
                >
                    {theme === 'Dark' ? "LIGHT" : "DARK"}
                </div>
                <div
                    className={`navbar_links`}
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                >
                    MODAL
                </div>
            </div>
        </div>
    );
};

export default Navbar;
