import React,{ Component } from "react";

function CondRenderPractise (props) {
    let buttontext = props.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displaytext = props.isLoggedIn ? "logged in" : "logged out"
    return(
        <div>
            <button onClick={props.handleClick}>{buttontext}</button>
            <h4>{displaytext}</h4>
        </div>
    )
}

export default CondRenderPractise;