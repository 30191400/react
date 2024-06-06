
//import React from 'react'

import React, { useState } from 'react';
import userContext from "./userContext";
// import { Children } from 'react';
 

const userContextProvider=({children})=>{
const [user,setUser]=React.useState(null)
return(
    <userContext.Provider value={{user,setUser}}>
    {children}
    </userContext.Provider>
)

}

export default userContextProvider;
