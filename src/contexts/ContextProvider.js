import React, { createContext, useContext, 
useState } from 'react';

const StateContext= creteContext();

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider= ({children}) => {
    return (
        <StateContext.Prodiver
        value={{ textL 'test'}}
    >
        {children}
        </StateContext.Prodiver>
    )
}