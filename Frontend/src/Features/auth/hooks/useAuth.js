import { useContext,useEffect } from "react";
import { authcontext } from "../auth.context";
import { login, logout, getMe, register } from "../services/auth.api";


export const useAuth = () => {

    const context = useContext(authcontext);
    const { user,setUser,loading,setLoading } = context;

    const handleLogin = async ({email , password}) => {
        setLoading(true)
        try{
            const data = await login({email,password})
            setUser(data.user)
        }
        catch(err){

        }finally{
            setLoading(false)
        }
    }

    const handleRegister = async ({username , email , password}) => {
        setLoading(true)
        try{
            const data = await register({username , email , password})
            setUser(data.user)
        }
        catch(err){

        }finally{
            setLoading(false)
        }
    }

    const handleLogout = async () =>{
        setLoading(true)
        try{
            await logout()
            setUser(null)
        }
        catch(err){

        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        const getAndSetUser = async() => {
            const data = await getMe()
            console.log(data.user)
            setUser(data.user)
            setLoading(false)
        }
        getAndSetUser()
    },[])

    return {user,loading,handleLogin,handleLogout,handleRegister}

}