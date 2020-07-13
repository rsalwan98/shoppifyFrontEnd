import React , {Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar'
import classes from './ProductDisplay.module.css'
import ProductBox from '../../components/ProductBox/ProductBox'

class ProductDisplay extends Component {

    render(){
        return (
            <div className={classes.ProductDisplay}>
                <Toolbar/>
                <ProductBox/>
            </div>
        )
    }
}

export default ProductDisplay;