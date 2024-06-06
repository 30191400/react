
//import React from 'react'

import React, { useState, createContext } from 'react';
// import { Children } from 'react';

const userContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null)
    const userObj = { user, setUser }
    return (
        <userContext.Provider value={userObj}>
            {children}
        </userContext.Provider>
    )

}
export default userContext;
