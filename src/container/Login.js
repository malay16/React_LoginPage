import React,{Component} from 'react';
import classes from './Login.css';
import {connect} from 'react-redux';
import Input from '../component/Input/Input';
import * as actions from '../store/action/login'
import { Route } from 'react-router';
import EmployeePage from '../component/Output/EmployeePage';



class Login extends Component {
    state = {
        controls: {

            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Mail Address'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false,
                errorMessage: "Please Enter valid Email Address"
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false,
                errorMessage: "Please Enter Valid Password"
            }
        },

        
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules)  //rule is true if present
        {
            return true
        }
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        if (rules.isEmail) {
            const pattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    inputChangeHandler = (event, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        }
        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
        console.log(this.state.formIsValid);
        this.setState({ controls: updatedControls, formIsValid: formIsValid })
        this.setState({ controls: updatedControls })
    }

  
    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value)
        console.log("****************************************")
        console.log(this.props)
        console.log(this.state)
        console.log("****************************************")
        console.log(this.props.errorResult)
        if(this.props.errorResult){
        console.log(this.props.errorResult,"value of error")
        this.props.history.push('/EmployeePage') 
    }
    }

   
    render() {
        const formElememntArray = [];
        for (let key in this.state.controls) {
            formElememntArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let form = formElememntArray.map(formElement => (
            <Input
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                touched={formElement.config.touched}
                shouldValidate={formElement.config.validation}
                errorMessage={formElement.config.errorMessage}
                changed={(event) => this.inputChangeHandler(event, formElement.id)}
            />
        ))

        if (this.props.loading) {
            form = <p>Loading....</p>
        }

        let errorMessage = null;
        if (this.props.error) {

            errorMessage = (
                <p style={{color:'white'}}>{this.props.error.message}</p>
            )
        }

        return (

            <div className={classes.Login} >
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <button >Submit</button>
                </form>
                
           
            </div>

        );


    }
}

const mapStatetoProps = state => {
    console.log("Runing Map to Props",state)
    return {
        errorResult: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Login);