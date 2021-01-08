import React, { Component } from "react";

class StateComp extends Component {
    state={
        isLoggedIn: true
    };

    render() {
        let wordDisplay 
        if(this.state.isLoggedIn === true){
            wordDisplay = 'in'
        }else {
            wordDisplay = 'out'
        }
        return(
            <div>
                <h3>You are currently logged {wordDisplay}</h3>
            </div>
        );
    }
}

export default StateComp;