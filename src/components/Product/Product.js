import React from 'react';
import classes from './Product.module.css'

const product = (props) => {
    return (
        <div onClick={() => props.clicked(props.prodId)} className={classes.Product}>
            <img className={classes.ProductImage} src={props.source} alt="prodImage"></img>
            <div className={classes.ProductData}>
                <h3>{props.name}</h3>
                <p>Rs. {props.price}</p>
            </div>
        </div>
    )
}

export default product;