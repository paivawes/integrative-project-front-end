import {Routes, Route} from "react-router-dom"
import Login from "../pages/login/Login.jsx"

export default function Rotas(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
            </Routes>
        </div>
    )

}