import React, { Component } from "react";

class HandleEvents extends Component {
    state={};

    handleClick = () => {
        console.log('I was clicked');
    }

    render() {
        return(
            <div>
                <img onMouseOver={() => console.log('Hovered')} src='https://www.fillmurray.com/200/100'/>
                <br />
                <br />
                <button onClick = {this.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default HandleEvents;