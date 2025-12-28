import { useState } from "react";
import Container from "./Container";
import { InputField } from "./InputField";
import type { Todo } from "../Common/model";
import { TodoList } from "./TodoList";


export default function Home() {
     const [todo,setTodo] = useState<string>('');
     const [todos,setTodos] = useState<Todo[]>([]);
      console.log(todo);
      console.log(todos);

      const handleAddTodo = (e:React.FormEvent) => {
         e.preventDefault();
             setTodos([...todos,{
               id : Date.now(),
               todo : todo,
               isDone : false
             }])

              setTodo('')

      }
      
  return (
    <div className=" w-full min-h-screen bg-gray-100">
        <Container>
                <div className=" ">
                      <h1 className="text-4xl capitalize font-bold text-cyan-500 pt-4"> taskify </h1>
                       <InputField todo={todo} setTodo={setTodo}   handleAddTodo={handleAddTodo} />
                          <TodoList todos={todos} setTodos={setTodos} />
                </div>
        </Container>
    </div>
  )
}
