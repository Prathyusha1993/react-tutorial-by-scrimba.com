import React from "react";

function FunctionalCompo () {
    const firstName = "Prathyusha"
    const lastName = "Kurigala"
    return (
        <div>
            <h3>Hello {firstName + " " + lastName}!</h3>
            <h4>Hello {`${firstName} ${lastName}`}!</h4>
        </div>
        
    )
}

export default FunctionalCompo;


