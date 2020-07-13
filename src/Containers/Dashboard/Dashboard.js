import React , { Component } from "react";
import Toolbar from '../../components/Toolbar/Toolbar'
import classes from './Dashboard.module.css'
import CategoryBox from '../../components/CategoryBox/CategoryBox'
import DashboardFooter from '../../components/DashboardFooter/DashboardFooter'
import { Redirect } from 'react-router-dom'
class Dashboard extends Component {

    state = {
        loggedIn: true
    }

    componentDidMount(){
        if(!document.cookie){
            this.setState({loggedIn : false})
        }
    }
    render(){
        return (
            <div className={classes.DashBoard}>
                {this.state.loggedIn ? null : <Redirect to="/"></Redirect>}
                <Toolbar/>
                <CategoryBox/>
                <DashboardFooter/>
            </div>
        )
    }
}

export default Dashboard;