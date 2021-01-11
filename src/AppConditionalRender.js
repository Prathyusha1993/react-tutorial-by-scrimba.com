import React, { Component } from "react";
import ConditionalRender from './class-components/conditionalRender'

class AppConditionalRender extends Component {
    state={
        isLoading: true,
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

    render() {
        return(
            <div>
                {this.state.unreadMessage.length > 0 ? <h3>You have {this.state.unreadMessage.length} unread messages! </h3> : null}
                <ConditionalRender isLoading={this.state.isLoading}/>
            </div>
        );
    }
}

export default AppConditionalRender;