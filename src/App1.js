import React, { Component } from "react";
import Header from './class-components/header'
import Greeting from './class-components/greeting'
import StateComp from "./class-components/stateComp";
import TodoWithState from "./class-components/todowithstate";
import HandleEvents from "./class-components/handlevents";
import ChangingState from "./class-components/changingState";

class App1 extends Component {
    state={
        name:'prathyusha',
        age:27
    };

    render() {
        return(
            <div>
                {/* <h5>{this.state.name}</h5>
                <p>{this.state.age} years old</p> */}
                <Header name={this.state.name}/>
                <Greeting name={this.state.name}/>
                {/* <StateComp /> */}
                <TodoWithState />
                <HandleEvents />
                <ChangingState />
            </div>
        );
    }
}

export default App1;