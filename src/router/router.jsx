import { Route, Routes } from "react-router-dom";
import { Login } from '../components/pages/login/login.jsx'
import { Schedule } from "../components/pages/schedule/schedule.jsx";

function PrivateRoute() {
    return (
        <Route path="/agendamento" element={<Schedule />} />
    );
}

export default function Router() {
    return (
        <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/agendamento" element={<PrivateRoute />} />
        </Routes>
    )
}