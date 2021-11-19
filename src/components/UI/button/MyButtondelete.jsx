import React from 'react';
import classes from "./MyButtondelete.module.css";

const MyButtondelete = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtnn}>
            {children}
        </button>
    );
};

export default MyButtondelete;