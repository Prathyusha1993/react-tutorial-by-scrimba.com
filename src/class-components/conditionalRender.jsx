import React from "react";

function ConditionalRender(props) {
    console.log(props.isLoading)
    return(
        <div>
            <h1>Navbar</h1>
            {props.isLoading ? <h3>Loading...</h3> : <h3>some cool stuff about ConditionalRendering</h3>}
            <h1>Footer</h1>
        </div>
    );
}

export default ConditionalRender;