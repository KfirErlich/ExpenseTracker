import React, { useState, useContext } from 'react'
import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH} from '../../shared/utils/validators'
import Button from '../../shared/components/FormElements/Button'
import {useForm} from '../../shared/hooks/form-hook'
import {AuthContext} from '../../shared/context/auth-context'

import './Auth.css'

const Auth = () => {
const auth = useContext(AuthContext)
const [isLogin, setIsLogin] = useState(true);
const [formState, inputHandler, setFormData] = useForm(
    {
        email: {
            value: '',
            isValid: false
        },
        password:{
            value: '',
            isValid: false
        },
    },
     false
);

const switchModeHandler = () => {
    if(!isLogin){
        setFormData({
            ...formState.inputs,
            userName: undefined,
        }, 
            formState.inputs.email.isValid && formState.inputs.password.isValid)
    }else {
        setFormData({
            ...formState.inputs,
            userName:{
                value: '',
                isValid: false
            }
        },false)
    }
    setIsLogin((login) => !login);
}

const submitHandler = event => {
    event.preventDefault()
    auth.login();
}


return (
        <Card className="authentication">
                <h2>התחברות למערכת</h2>
                <hr />
                <form className="place-form">
                    {!isLogin && 
                    <Input 
                    element="input"
                    id="userName"
                    type="text"
                    label="שם משתמש"
                    validators={[VALIDATOR_MINLENGTH(4)]}
                    onInput={inputHandler}
                    errorText="אנא הכנס שם משתמש עם 4 אותיות או יותר"
                    />
                    }
                    <Input 
                    element="input"
                    id="email"
                    type="email"
                    label="אימייל"
                    validators={[VALIDATOR_EMAIL()]}
                    onInput={inputHandler}
                    errorText="אימייל שגוי, בבקשה הכנס אימייל תקין"
                    />
                    <Input 
                    element="input"
                    id="password"
                    type="Password"
                    label="סיסמה"
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    onInput={inputHandler}
                    errorText="אנא הכנס סיסמה באורך של 6 תווים לפחות"
                    />
                <Button type="submit" disabled={!formState.isValid} onClick={submitHandler}>
                    {isLogin ? 'כניסה' : 'הרשמה'}
                </Button>
                </form>
                <Button inverse onClick={switchModeHandler}>
                    {isLogin ? 'הרשמה' : 'משתמש/ת קיים'}
                </Button>
        </Card>
    )
}

export default Auth