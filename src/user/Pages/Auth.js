import React from 'react'
import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import {VALIDATOR_EMAIL} from '../../shared/utils/validators'

const Auth = () => {

    return (
        <Card className="authentication">
                <h2>התחברות למערכת</h2>
                <hr />
                <form className="place-form">
                    <Input 
                    element="input"
                    type="email"
                    label="אימייל"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="אימייל שגוי, בבקשה הכנס אימייל תקין"
                    />
                </form>
        </Card>
    )
}

export default Auth