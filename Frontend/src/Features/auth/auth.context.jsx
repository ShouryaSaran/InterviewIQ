import { createContext, useState } from "react";
import { getMe } from "./services/auth.api";

export const authcontext = createContext()

export const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const[loading,setLoading] = useState(true) //during production this will be set to true when we want to hydrate the user
    
    return (
        <authcontext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </authcontext.Provider>
    )
}

