import React from 'react'
import ToolbarItems from './ToolbarItems/ToolbarItems'
import classes from './Toolbar.module.css'
import Aux from '../../hoc/Auxiliary'
const toolbar = (props) => {
    return(
        <Aux>
            <ul className={classes.Toolbar}>
                <li style={{
                    float : "left",
                    color : "white",
                    padding : "13px",
                    fontSize : "25px",
                    fontFamily: "Arvo",
                    marginLeft : "20px"
                }
                }>
                    SHOPPIFY</li>

                <ToolbarItems link="/" val="signout">SignOut</ToolbarItems>    
                <ToolbarItems link="/cart" val="cart">Cart</ToolbarItems>
                <ToolbarItems link="/orders" val="orders">Orders</ToolbarItems>
                <ToolbarItems link="/profile" val="profile">My Profile</ToolbarItems>
            </ul>
        </Aux>
    )
}

export default toolbar;