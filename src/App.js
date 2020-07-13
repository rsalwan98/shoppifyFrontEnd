import React, { Component } from 'react';
import './App.css';
import Layout from './Containers/Layout/Layout'
import Aux from './hoc/Auxiliary'
import { Switch , Route } from 'react-router-dom'
import Dashboard from './Containers/Dashboard//Dashboard'
import ProductDisplay from './Containers/ProductDisplay/ProductDisplay';
import ProductInfo from './Containers/ProductInfo/ProductInfo'
import Cart from './Containers/Cart/Cart'

class App extends Component{
  render(){
    return(
      <div>
        <Aux>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/products" component={ProductDisplay}></Route>
            <Route exact path="/productInfo" component={ProductInfo}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route path="/" component={Layout}></Route>
          </Switch>
        </Aux>
      </div>
    )
  }
}

export default App;
