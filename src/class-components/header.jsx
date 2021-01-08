import React, {Component} from 'react'

class Header extends Component {
    state={};

    render() {
        return (
            <div>
                <h1>Welcome,{this.props.name}</h1>
            </div>
        );
    }
}

export default Header;