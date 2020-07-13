import React from 'react'
import classes from './CategoryTemplate.module.css';
const Template = (props) => {
    return(
        <div onClick={()=>props.clicked(props.category)} className={classes.CategoryTemplate}>
            <img className={classes.myImage} src={props.source} alt={props.category}></img>
            <h3 className={classes.myText}>{props.category}</h3>
        </div>
    )
}

export default Template;