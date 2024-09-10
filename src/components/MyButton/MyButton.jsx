import React from 'react';
import classes from './MyButton.module.css'
const MyButton = ({children, onClick, props}) => {
    return (
        <button
            className={classes.post_form_button}
            onClick={onClick}
            {...props}>

            {children}
        </button>
    );
};

export default MyButton;