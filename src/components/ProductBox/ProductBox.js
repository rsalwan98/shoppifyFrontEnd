import React, { Component } from 'react'
import classes from './ProductBox.module.css'
import Product from '../Product/Product'
import { withRouter } from 'react-router-dom'
import qs from 'qs'
import axios from '../../axiosInstance'

class productBox extends Component  {

    state = {
        productData : [],
        product : null
    }

    componentDidMount(){
    
        const category = qs.parse(this.props.location.search , { ignoreQueryPrefix: true })
        axios.get('/products', {
            params : {
                data : category.category
            }
        })
        .then(res => {
            this.setState({productData : res.data})
            let product = this.state.productData.map(product => {
                return    (
                    <Product
                        key={product._id}
                        name={product.name}
                        source={product.imgSource}
                        price={product.price} 
                        prodId={product._id}
                        clicked={this.productClickHandler}
                    />
                )}) 
            this.setState({product : product})
        })
    }

    productClickHandler = (id) => {
        
        this.props.history.push({
            pathname : '/productInfo',
            search : '?productid='+id
        })
        
    }
    
    render(){
        return (
            <div className={classes.ProductBox}>
                {this.state.product}
            </div>
        )
    }   
}

export default withRouter(productBox);