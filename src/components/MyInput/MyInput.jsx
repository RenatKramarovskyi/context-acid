import React from 'react';
import classes from './MyInput.module.css'
const MyInput = ({children, value, onChange, ...props}) => {
    return (
        <input {...props} type={'text'} onChange={onChange} className={classes.prettyInput}/>
    );
};

export default MyInput;