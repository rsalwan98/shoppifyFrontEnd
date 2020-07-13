import React from 'react'
import classes from './Input.module.css'

const input = (props) => {

    let inputElement = null ;
    switch (props.ElementType){
        case('input') :
            inputElement=<input className={classes.FormInput} onChange={props.changed} value={props.val} {...props.elementConfig}></input>
            break;
        default : 
            inputElement = <input className={classes.FormInput} onChange={props.changed} value={props.val} {...props.elementConfig}></input>    
    }

    return (
        <div>
            {inputElement}
        </div>
    )
}

export default input;