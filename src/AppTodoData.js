import { React } from "react";
import todoData from "./functional-components/todoData";
import TodoItem from "./functional-components/todoitem";

function AppTodoData () {
    const todoComponent = todoData.map(todo => {
        return <TodoItem key={todo.id} item={todo}/>
    })
    return(
        <div>
            {todoComponent}
        </div>
    );
}

export default AppTodoData;