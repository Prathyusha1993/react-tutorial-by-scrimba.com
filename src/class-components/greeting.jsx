import React, {Component} from 'react'

class Greeting extends Component {
    
    render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if(hours <12){
        timeOfDay = "Morning"
    }else if(hours >= 12 && hours <17){
        timeOfDay = "Afternoon"
    } else{
        timeOfDay = "Evening"
    }
        return (
            <h1>Good {timeOfDay} to you, {this.props.name}</h1>
        );
    }
}

export default Greeting;