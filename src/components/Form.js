import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Form = () =>{
    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)

    const firebase = useContext(FirebaseContext)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(value)
        if(value.trim()){
            firebase.addNote(value.trim()).then( () => {
                alert.show('note was added!', 'success')
            }).catch( () => {
                alert.show('something went wrong', 'danger')
            })
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