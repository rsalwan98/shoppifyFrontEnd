import React, { Component } from 'react'
import classes from './Layout.module.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import MainImage from '../../assets/images/mainImage.jpg'
import NavItems from '../../components/UI/NavItems/NavItems'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import { Redirect } from 'react-router-dom'
class Layout extends Component {
    state={
        isLoginSelected : true,
        isSignUpSelected : false,
        loggedIn : false
    }

    LoginClickHandler = () => {
        this.setState({isLoginSelected : true , isSignUpSelected : false})
    }

    SignUpClickHandler = () => {
        this.setState({isLoginSelected : false , isSignUpSelected : true})
    }

    componentWillMount() {
        if(document.cookie){
            const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('access_token'))
        .split('=')[1];
        if(cookieValue){
            this.setState({loggedIn : true})
        }
        }
    }

    render()
    {
        return (
            <div className={classes.Layout}>
                {this.state.loggedIn ? <Redirect to="/dashboard"></Redirect> : null}
                <div className={classes.Main}>
                    <div className={classes.shadow}>
                        <div className={classes.LeftSide}>
                            <div className={classes.Logo}>
                                Shoppify
                            </div>
                            <div className={classes.myOptions}>
                                <div onClick={this.LoginClickHandler} className={classes.Login}>
                                    <NavItems isSelected={this.state.isLoginSelected} onClick={this.clickHandler} name="Login"></NavItems>
                                </div>
                                <div onClick={this.SignUpClickHandler} className={classes.SignUp}>
                                    <NavItems isSelected={this.state.isSignUpSelected} name="SignUp"></NavItems>
                                </div>
                            </div>
                            {this.state.isLoginSelected ? <LoginForm/> : <SignUpForm/>}
                        </div>
                        <img className={classes.RightSide} src={MainImage} alt="my"></img>
                    </div>
                </div>
            </div>
        )
    }
}


export default Layout;