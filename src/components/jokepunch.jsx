import React, { Component } from "react";

function JokePunch(props) {
    return(
        <div>
            <h3 style={{display: props.question ? "block" : "none" }}>Question: {props.question}</h3>
            <p style={{color: props.question ? "block" : "#88ee88", fontSize: "15px" }}>Punchline: {props.punchline}</p>
        </div>
    );
}

export default JokePunch;