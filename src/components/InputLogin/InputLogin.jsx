import "./InputLogin.css"
import React from "react"

const InputLogin = (props) => {
    const {label, type, placeholder, id, value} = props;

    return(
        <div className="inputlogin">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} id={id} value={value} />    
        </div>
    )
}
export default InputLogin