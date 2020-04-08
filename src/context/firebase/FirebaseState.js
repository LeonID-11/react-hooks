import React, { useState } from 'react';
import { FirebaseContext } from './firebaseContext';
import { firebaseReduser } from './firebaseReduser';

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    };

    const [state, dispatch] = useState(firebaseReduser, initialState);

    return(
        <FirebaseContext.Provider value={{
            
        }}>
            {children}
        </FirebaseContext.Provider>
    )
};