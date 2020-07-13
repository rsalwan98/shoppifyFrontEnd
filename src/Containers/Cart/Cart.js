import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import classes from './Cart.module.css'
import CartItems from '../../components/CartItems/CartItems'
class Cart extends Component {
    render(){
        return (
            <div className={classes.Cart}>
                <Toolbar/>
                <CartItems/>
            </div>
        )
    }
}

export default Cart;