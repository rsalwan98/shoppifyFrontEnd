import React from 'react'
import Categories from '../Categories/Categories'
import classes from './CategoryBox.module.css';

const categoryBox = (props) => {

    return (
        <div className={classes.CategoryBox}>
            <h1 style={{color : "white",
                        textAlign : "center",
                        fontSize : "6vh",
                        paddingTop : "1vh"}}>
                            Categories</h1>
            <Categories/>
        </div>
    )
}

export default categoryBox;