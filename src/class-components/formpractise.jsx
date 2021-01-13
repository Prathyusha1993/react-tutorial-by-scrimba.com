import React,{ Component } from "react";

class FormPractise extends Component {
    state={
        firstName:'',
        lastName:'',
        age:0,
        gender:'',
        destination:'',
        diet:'',
        isVegan:false,
        isKosher:false,
        isLocatosefree: false
        };

    handleChange = (e) => {
        const {name, value, type, checked } = e.target;
        type=== "checked" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="first
                Name" onChange={this.handleChange}/>
                <br/>
                <input type="text" name="lastName" value={this.state.lastName} placeholder="last
                Name" onChange={this.handleChange}/>
                <br />
                <input type="number" name="age" value={this.state.age} placeholder="Age
                Name" onChange={this.handleChange}/>
                <br />

                <label>
                    <input type="radio" name="gender" value="male"  checked={this.state.gender === 'male'}
                    onChange={this.handleChange}/>Male
                </label>
                <br/>
                <label>
                    <input type="radio" name="gender" value="female"  checked={this.state.gender === 'female'}
                    onChange={this.handleChange}/>Female
                </label>
                <br />

                <label>Destiantion:</label>
                <select
                    value={this.state.destination}
                    onChange={this.handleChange}
                    name="destination">
                    <option value="">--please select destination--</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="chicago">Chicago</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="New Jersey">New Jersey</option>
                </select>
                <br />
                <label>Diet restrications:</label>
                <input type="checkbox" checked={this.state.isVegan} name="isVegan" onChange={this.handleChange}/> Vegan?
                <input type="checkbox" checked={this.state.isKosher} name="isKosher"  onChange={this.handleChange}/> Kosher?
                <input type="checkbox" checked={this.state.isLactosefree} name="isLactosefree" onChange={this.handleChange}/> Lactose?

                <h3>Entered Information:</h3>
                <h2>Your name: {this.state.firstName} {this.state.lastName}</h2>
                <h3>Your age:{this.state.age}</h3>
                <h3>Your destination: {this.state.destination}</h3>
                <p>Youe dietary restrications:</p>
                <p>Vegan: {this.state.isVegan?"Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher? "yes" : "No"}</p>
                <p>LActose: {this.state.isLactosefree ? "Yes" : "No"}</p>

                <button>Submit</button>
            </form>
        );
    }
}

export default FormPractise;