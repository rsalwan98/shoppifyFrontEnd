import React,{ Component } from "react";
import Toolbar from '../../components/Toolbar/Toolbar'
import classes from './ProductInfo.module.css'
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import qs from 'qs'
import axios from '../../axiosInstance'

class ProductInfo extends Component{

    state ={
        productinfo : null
    }
    componentDidMount(){
        const productid = qs.parse(this.props.location.search , { ignoreQueryPrefix: true })
        axios.get('/productInfo', {
            params : productid
        })
        .then((res) => {
            let productDisp= <ProductDetail
                source={res.data.imgSource}
                desc={res.data.description}
                name={res.data.name}
                price={res.data.price}
                Id={res.data._id}
            />
            this.setState({productinfo : productDisp})
        })
    }
    render(){
        return (
            <div className={classes.ProductInfo}>
                <Toolbar/>
                {this.state.productinfo}
            </div>
        )
    }
}

export default ProductInfo;