import React, { Component } from "react";

class Forms extends Component {
    state ={
        firstName:'',
        lastName:'',
        isFriendly: false,
        gender:"",
        favColor:'pink'
    };

    handleChange = (e) => {
        const {name, value, type, checked} = e.target
        // this.setState({
        //     //[e.target.name]: e.target.value  //object ddestructing
        //     [name]: value
        // })
        type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({ [name]: value})
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                <br />
                <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                <br />
                
                <textarea 
                value={"some dfault value"}
                onChange={this.handleChange}/>
                <br />
                <label>
                    <input type="checkbox"  checked={this.state.isFriendly} name="isFriendly" onChange={this.handleChange} /> Is Friendly?
                </label>
                <br />
                <label>
                    <input  type="radio" name="gender" value="male" checked={this.state.gender === 'male'} 
                    onChange={this.handleChange}/> Male
                </label>
                <br />
                <label>
                <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} 
                onChange={this.handleChange}/>Female</label>
                <br />
                <label>Fav color:</label>
                <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor">
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="white">White</option>
                </select>

                <h1> You are {this.state.firstName} {this.state.lastName}</h1>
                <h4>you are {this.state.gender}</h4>
                <h3>Your favorite colro is {this.state.favColor}</h3>
                <button>Submit</button>
            </form>
        );
    }
}

export default Forms;