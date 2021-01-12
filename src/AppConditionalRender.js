import React, { Component } from "react";
import ConditionalRender from './class-components/conditionalRender'
import CondRenderPractise from "./class-components/condrenderpractise";

class AppConditionalRender extends Component {
    state={
        isLoading: true,
        isLoggedIn: false,
        unreadMessage : [
            "call your mom",
            "New spam email avaliable. All links are definitely safe to click."
        ]
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }

    handleClick = () => {
           this.setState((prevState) => {
               return {
                   isLoggedIn: !prevState.isLoggedIn
               }
           })
    }

    render() {
        return(
            <div>
                {this.state.unreadMessage.length > 0 ? <h3>You have {this.state.unreadMessage.length} unread messages! </h3> : null}
                <ConditionalRender isLoading={this.state.isLoading}/>
                <CondRenderPractise handleClick={this.handleClick} 
                isLoggedIn={this.state.isLoggedIn} />

            </div>
        );
    }
}

export default AppConditionalRender;