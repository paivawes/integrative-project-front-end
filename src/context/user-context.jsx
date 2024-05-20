import { createContext, useContext, useState } from "react";
import AuthService from "../service/auth-service/auth-service";

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => { 
    const [user, setUser] = useState(null)

    const authService = new AuthService()

    const logout = () => {
        authService.removeAuthorizationHeader()
        setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    )
}