import type { Todo } from "../Common/model";
import { SingleTodo } from "./SingleTodo";

 type TodoListPropsType  = {
     todos : Todo[];
     setTodos : React.Dispatch<React.SetStateAction<Todo[]>>
 }


export const TodoList = ({todos,setTodos}:TodoListPropsType) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
            {
                  todos.map(todo => <SingleTodo key={todo.id} todo={todo} todos={todos}  setTodos={setTodos} />)
            }
    </div>
  )
}
