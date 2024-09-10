import React from 'react';
import cl from './Output.module.css'
const Output = ({inputValue}) => {

    return (
        <div className={cl.outputBox}>
            {inputValue}
        </div>
    );
};

export default Output;