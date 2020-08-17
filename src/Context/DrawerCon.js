import React, { useState,createContext } from 'react';

export const DrawerCon = createContext();

export const DrawerProvider = props=>{
    const [open, setOpen] = useState(true);

    return(
        <DrawerCon.Provider value = {[open,setOpen]}>
            {props.children}
        </DrawerCon.Provider>
    )
}