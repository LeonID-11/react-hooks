import React from 'react'

export const Notes = ({notes}) =>{
    
    return(
        <ul className="list-group">
            {notes.map( (note)=>(
                <li className="list-group-item note" key ={note.id}>
                    <span>
                        <strong>{note.title}</strong>
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                    <button 
                        type="button" 
                        className="btn btn-danger btn-sm"
                    >
                        &times;
                    </button>
                </li>
            ))}
        </ul>
    )
}