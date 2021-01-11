import React, { Component } from "react";
import TodoItemWithState  from "./todoitemwithstate";

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes

class TodoWithState extends Component {
     state={
         todoData : [ 
            {
                id:1,
                text: "Take out the trash",
                completed: true
            },
            {
                id:2,
                text: "Grocery shopping",
                completed: false
            },
            {
                id:3,
                text: "Wash utensils",
                completed: false
            },
            {
                id:4,
                text: "6 squats per day",
                completed: false
            },
            {
                id:5,
                text: "Edit resume",
                completed: true
            },
            {
                id:6,
                text: "Walking",
                completed: true
            },
        ]
     };
         
     handleChange = (id) => {
        console.log("changed", id);
        this.setState((prevState) => {
            const updatedTodos = prevState.todoData.map(todo => {
                if(todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todoData: updatedTodos
            }
        })
     }

     render(){
        const todoComponent = this.state.todoData.map(todo => {
            return <TodoItemWithState key={todo.id} item={todo} handleChange={this.handleChange}/>
        })
         return(
             <div>
                 {todoComponent}
             </div>
         );
     }
}

export default TodoWithState;
