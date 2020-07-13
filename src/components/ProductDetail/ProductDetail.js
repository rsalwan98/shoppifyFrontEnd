import React, { Component } from 'react'
import classes from './ProductDetail.module.css'
import axios from '../../axiosInstance'
import jwtDecode from 'jwt-decode'
class productDetail extends Component {
    state = {
        productData : null
    }

    AddToCartHandler = (id) => {  
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('access_token'))
            .split('=')[1];
            
        const cartData={
            userId : jwtDecode(cookieValue),
            productId : id
        }    
        axios.post('/cart',cartData)
        .then(res => {  
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        }) 
    }
    render(){
        return (
            <div className={classes.ProductDetail}>
                <img src={this.props.source} alt={this.props.name} className={classes.ProductImg}></img>
                <div className={classes.ProductInfo}>
                    <h1>{this.props.name}</h1>
                    <h3>Rs.{this.props.price}</h3>
                    <div className={classes.Desc}>
                        <p>{this.props.desc}</p>
                    </div>                    
                </div>
                <button onClick={()=> this.AddToCartHandler(this.props.Id)} className={classes.AddToCart}>Add to cart</button>
            </div>
        )
    }
}

export default productDetail;