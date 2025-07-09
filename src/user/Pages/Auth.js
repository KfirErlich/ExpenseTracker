import React from 'react'
import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH} from '../../shared/utils/validators'
import Button from '../../shared/components/FormElements/Button'
import {useForm} from '../../shared/hooks/form-hook'

import './Auth.css'

const Auth = () => {

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


    return (
        <Card className="authentication">
                <h2>התחברות למערכת</h2>
                <hr />
                <form className="place-form">
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
                <Button type="submit" disabled={!formState.isValid}>כניסה</Button>
                </form>
        </Card>
    )
}

export default Auth