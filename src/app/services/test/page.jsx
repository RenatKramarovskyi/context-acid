"use client";

import React, {useEffect, useState} from 'react';
import cl from './TestPage.module.css'
import Output from "@/components/Output/Output";
import MyInput from "@/components/MyInput/MyInput";
import MyButton from "@/components/MyButton/MyButton";

const TestPage = () => {

    useEffect(() => {
        localStorage.getItem("content") !== null
        && setInputValue(localStorage.getItem("content"))
    }, []);


    const [inputValue, setInputValue] = useState('')


    function handleButton () {
        localStorage.setItem('content', inputValue);
    }

    return (
        <div className={cl.container}>
                <Output inputValue={inputValue}/>
                <MyInput
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={"Enter smth here"}/>
                <MyButton onClick={handleButton}>
                    SAVE TO LOCALSTORAGE
                </MyButton>
        </div>
    );
};

export default TestPage;