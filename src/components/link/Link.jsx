import { NavLink } from "react-router-dom";
import React from "react";
import "./Link.css"

const Link = (props) =>{
    const {to, label} = props;

    return (
        <div className="link">
            <NavLink
            to={to} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""} >
                {label}
            </NavLink>
        </div>
    )
}
export default Link