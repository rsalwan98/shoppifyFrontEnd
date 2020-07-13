import React, { Component } from 'react'
import axios from '../../axiosInstance'
import jwtDecode from 'jwt-decode'
class CartItems extends Component{

    state ={
        cartItems : null
    }

    componentDidMount(){
        const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('access_token'))
            .split('=')[1];
            
        const userId = jwtDecode(cookieValue)
        axios.get('/cart',{
            params : {
                data : userId
            } 
        }).then((res) => {
            console.log(res)
        })
        
    }

    render(){
        return (
            <div>
                
            </div>
        )
    }
}

export default CartItems;