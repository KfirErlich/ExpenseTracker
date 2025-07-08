// We use the useReducer hook when we want to handle more than one state that connected to each other (or have more complex states)
// For example here , we have the validation state and the input state  

import React, {useReducer, useEffect} from 'react'
import { validate } from '../../utils/validators';
import './Input.css'

const inputReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default: 
            return state;
    }
}


const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isTouched: false,
        isValid: false
    });

    const {id, onInput} = props
    const {value, isValid} = inputState

    // useEffect(() => {
    //     onInput(props.id,inputState.value, inputState.isValid)
    // }, [id, onInput, value, isValid])


    const changeHandler = event => {
        dispatch({
            type: 'CHANGE', 
            val: event.target.value,
            validators: props.validators
        })
    }

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        })
    }

    const element = props.element === 'input' ? (
    <input 
    id={props.id} 
    type={props.type} 
    placeholder={props.placeholder} 
    onChange={changeHandler} 
    onBlur={touchHandler}
    value={inputState.value}/> 
    ): (
    <textarea 
    id={props.id} 
    rows={props.rows || 3} 
    onChange={changeHandler} 
    onBlur={touchHandler}
    value={inputState.value}/>
    );



    return <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>

}

export default Input