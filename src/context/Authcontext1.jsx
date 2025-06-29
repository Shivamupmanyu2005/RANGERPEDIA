import React, {useState, useEffect, useContext, createContext} from "react";
import { account } from "../lib/appwrite";
import {useNavigate} from "react-router"
import { ID } from "appwrite";


const AuthContext1 = createContext();

export const AuthProvider = ({children}) => {
    const [loading,setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getUserOnLoad();

    }, [])

    const getUserOnLoad = async() => {
        try {
            let accountDetails = await account.get()
            console.log("accountdetails:",accountDetails);
            setUser(accountDetails);
            setLoading(false)

        } catch(error) {
            setLoading(false);

        }

    };

    const handleUserLogin = async(e, credentials) => {
        e.preventDefault();
        
        try {
            let response = await account.createEmailPasswordSession(
                credentials.email,
                credentials.password
            );
            let accountDetails = await account.get();
            setUser(accountDetails);
            navigate('/');
            
        } catch (error) {
            console.log(error);
            
        }

    };

    const handleLogout = async() => {
        const response = await account.deleteSession("current");
        setUser(null);
    };

    const handleRegister = async(e, credentials) => {
        e.preventDefault();
        console.log("Handle Register triggered!", credentials);
        if (credentials.password1 !== credentials.password2) {
            alert("Passwords did not match!");
            return;
        }
        try {
            let response = await account.create(
                ID.unique(),
                credentials.email,
                credentials.password1,
                credentials.name
            )
             console.log("User registered!", response);
             await account.createEmailPasswordSession(
                             credentials.email,
                             credentials.password1
                         );
                         let accountDetails = await account.get();
                                     setUser(accountDetails);
                                     navigate("/login");

            
        } catch (error) {
            console.error(error);
            
        }
    }

    const contextData =  {
        user,
        handleUserLogin,
        handleLogout,
        handleRegister
}

return <AuthContext1.Provider value = {contextData} >
        {loading  ? <p>Loading</p> : children}

    </AuthContext1.Provider>

}

export const useAuth = () => {
   
    return useContext(AuthContext1)
}

export default AuthContext1;



