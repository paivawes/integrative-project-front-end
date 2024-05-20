import { createContext, Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState();

    async function signIn({ userName, password }) {

    }

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
}
