import React from 'react'
import classes from './NavItems.module.css'

const navItems = (props) => {

    let appliedClasses  = [];
    appliedClasses.push(classes.NavItems);

    if(props.isSelected){
        appliedClasses.push(classes.Selected)
    }
    return (
        <div>
            <button className={appliedClasses.join(' ')}>{props.name}</button>
        </div>
    )
}   

export default navItems;