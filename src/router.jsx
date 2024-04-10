import { Route, Routes } from "react-router-dom";
import { Login } from './components/pages/login/login'
import { AuthProvider } from "./context/AuthContext";

export default function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Login />} >
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}