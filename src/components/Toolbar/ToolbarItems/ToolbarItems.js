import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './ToolbarItems.module.css'
import axios from '../../../axiosInstance'
import jwtDecode from 'jwt-decode'

const toolbarItems = ( props ) => {

    const signOutHandler = () =>{
        if(props.val==="signout"){

            const cookieValue = document.cookie
            .split('; ')
            .find(row => row.startsWith('access_token'))
            .split('=')[1];

            document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            
            axios.delete('/signout', {data : jwtDecode(cookieValue)})
        }
    }
    return (
        <li className={classes.ToolbarItems}>
            <NavLink onClick={signOutHandler} to={props.link} exact activeClassName={classes.active}>
                {props.children}
            </NavLink>
        </li>
    )
}

export default  toolbarItems