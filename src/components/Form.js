import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';

export const Form = () =>{
    const [value, setValue] = useState(''),
        alert = useContext(AlertContext)
    ;

    const submitHandler = (e) => {
        e.preventDefault()
        
        if(value.trim()){

            alert.show('note was added!', 'success')
            setValue('');
        }else{
            alert.show('enter name note')
        }

    }
    
    return(
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input 
                    className="form-control" 
                    type="text"
                    placeholder="enter note name" 
                    value = {value}
                    onChange = {e => setValue(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">add note</button>
        </form>
    )
}