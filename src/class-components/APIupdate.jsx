import React, { Component } from "react";

class APIUpdate extends Component {
    state={
        isLoading: false,
        characters: {}
    };

    componentDidMount () {
        this.setState({isLoading: true})
        fetch("https://swapi.dev/api/people/5/")
        .then((response) => response.json())
        .then(data => {
            this.setState({
                isLoading: false,
                characters: data
            })
        })
    }

    render() {
        const text = this.state.isLoading ? "Loading.." : this.state.characters.name
        return(
            <div>
                {text}
            </div>
        );
    }
}

export default APIUpdate;