import React from 'react';
import classes from './Button.module.css'
const button = (props) => {
    return (
        <div>
            <button className={classes.Button}>{props.name}</button>
        </div>
    )
}

export default button;