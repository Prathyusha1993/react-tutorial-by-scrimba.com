import React,{ Component } from "react";

class ChangingState extends Component {
    state={
        count:0
    };

    handleButton1 = () => {
      let copy = this.state.count
        this.setState({copy: this.state.count++}); //this is new version of updating the state directly inside the brackets{}
    }

    //to see the previous state and the increased state this is how we write (BTW both are same)
    handleButton = () => {
        let copy = this.state.count
          this.setState((prevState) => {   //this is old version of updating the state to also see the prevState 
              return {
                  count: prevState.count + 1
              }
          });
      }

      componentDidMount(){
          console.log("Mounted");
      }

      componentDidUpdate() {
          console.log("Did update")
      }

    render(){
        console.log("Render");
        return(
            <div>
                <h2>{this.state.count}</h2>
                <button onClick = {this.handleButton}>Increment!</button>
            </div>
        );
    }
}

export default ChangingState;