import React, { Component } from 'react'
import Input from '../UI/Input/Input'
import classes from './LoginForm.module.css'
import Button from '../UI/Button/Button'
import axios from '../../axiosInstance'
import { Redirect} from 'react-router-dom'

class LoginForm extends Component {
    state ={
        LoginForm : {
            emailId : {
                elementType : "input",
                elementConfig : {
                    type : "text",
                    placeholder : "Email-Id"
                },
                value : ""
            },
            password : {
                elementType : "input",
                elementConfig : {
                    type : "password",
                    placeholder : "Password"
                },
                value : ""
            }
        },
        loggedIn : false
    }

    loginFormInputHandler = (event , key) => {
        const updatedState = {
            ...this.state.LoginForm
        }
        const formData= {...updatedState[key]}
        formData.value=event.target.value
        updatedState[key]=formData
        this.setState({LoginForm : updatedState})
    }

    checkCred = (event) => {
        event.preventDefault()
        const loginCredentials ={
            email : this.state.LoginForm.emailId.value,
            password : this.state.LoginForm.password.value
        }
        axios.post('/login',loginCredentials)
        .then(res => {
            
            if(res.data==="password mismatch" || res.data==="no user" || res.data.error)
            {   
                alert("Invalid Credentials")
            }
            else{
                const token = res.data.jwtToken
                document.cookie='access_token='+token;
                this.setState({loggedIn : true})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){

        let formElements = [];
        for(let key in this.state.LoginForm){
            formElements.push({
                id : key,
                elementDesc : this.state.LoginForm[key]
            })
        }

        let form = (
            <form onSubmit={this.checkCred}>
                {formElements.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementConfig={formElement.elementDesc.elementConfig} 
                        elementType = {formElement.elementDesc.elementType}
                        changed={(event => this.loginFormInputHandler(event,formElement.id))}
                        val={formElement.value}
                    />
                ))}
                <Button name="Login"></Button>
            </form>
        )
        return (
            <div className={classes.LoginForm}>
                {this.state.loggedIn ? <Redirect to="/dashboard"></Redirect> : null}
                {form}
            </div>
        )
    }
}

export default LoginForm; 