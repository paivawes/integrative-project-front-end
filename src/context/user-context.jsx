import { createContext, useContext, useState } from "react";
import AuthService from "../service/auth-service/auth-service";

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

const userJson = localStorage.getItem("user")

export const UserProvider = ({ children }) => { 
    const [user, setUser] = useState(JSON.parse(userJson))
    
    const authService = new AuthService()

    const logout = () => {
        authService.removeAuthorizationHeader()
        setUser(null)
        }

    const hasConnection = () => {
        const token = localStorage.getItem("token")
        if (token && userJson) {
            const userStorage = JSON.parse(userJson)
            setUser(userStorage)
            authService.setAuthorizationHeader(token)
        } else {
            logout()
        }
    };

    return (
            <UserContext.Provider value={{ user, setUser, logout, hasConnection }}>
                {children}
            </UserContext.Provider>
    )
}
