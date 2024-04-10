import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/login/login";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} >
            <Route path="/login" element={<Login/>} />
            </Route>
        </Routes>
    )
}