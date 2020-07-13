import React , { Component } from "react";
import classes from './SignUpForm.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import axios from '../../axiosInstance'
class SignUpForm extends Component {
    state ={
        SignUpForm : {
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
            },
            retype_password : {
                elementType : "input",
                elementConfig : {
                    type : "password",
                    placeholder : "ReType-Password"
                },
                value : ""
            }
        },
        passMatch : true
    }

    signUpFormInputHandler = (event , key) => {
        const updatedState = {
            ...this.state.SignUpForm
        }
        const formData= {...updatedState[key]}
        formData.value=event.target.value
        updatedState[key]=formData
        this.setState({SignUpForm : updatedState})
    }

    submitData = (event) => {
        event.preventDefault()
        
        if(this.state.SignUpForm.password.value !== this.state.SignUpForm.retype_password.value){
            this.setState({passMatch : false})
        }
        else{
            const userCredentials ={
                email : this.state.SignUpForm.emailId.value,
                password : this.state.SignUpForm.password.value
            }
            axios.post('/signup',userCredentials)
            .then(res => {
                alert("Signed Up");
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    render() {
        let formElements = [];
        for(let key in this.state.SignUpForm){
            formElements.push({
                id : key,
                elementDesc : this.state.SignUpForm[key]
            })
        }

        let form = (
            <form onSubmit={this.submitData}>
                {formElements.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementConfig={formElement.elementDesc.elementConfig} 
                        elementType = {formElement.elementDesc.elementType}
                        changed={(event => this.signUpFormInputHandler(event,formElement.id))}
                        val={formElement.value}
                    />
                ))}
                {this.state.passMatch ? null : <p>The passwords donot Match</p>}
                <Button name="SignUp"></Button>
            </form>
        )
        return (
            <div className={classes.SignUpForm}>
                {form}
            </div>
        )
    }
}

export default SignUpForm;