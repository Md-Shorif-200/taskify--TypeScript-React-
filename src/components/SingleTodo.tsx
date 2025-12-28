import { FaCheckCircle, FaEdit } from "react-icons/fa";
import type { Todo } from "../Common/model";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {

    const [edit,setEdit] = useState<boolean>(false) 
    const [editTodo,setEditTodo] = useState<string>(todo.todo) 

    // handle  Done Function

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };


//  delete function

  const handleDelete = (id : number) => {
    setTodos(todos.filter(todo => todo.id != id))
  }


//   edit function

const handleEdit =(e:React.FormEvent,id:number) => {
    //  if(!todo.)
     e.preventDefault();
     setTodos(todos.map(todo => todo.id == id ? {...todo,todo:editTodo } : todo))
     setEdit(false)
}
 
  return (
    <form onSubmit={(e) => handleEdit(e,todo.id)}>
      <div className="bg-cyan-400 text-white rounded-md flex justify-between items-center px-4 py-3">
   {
     edit ? (
            <input value={editTodo} type="text" className="border border-white text-black px-2 py-1 rounded-md" onChange={(e) => setEditTodo(e.target.value) } />
     ) : <>
               {todo.isDone ? (
          <>
            <s className="capitalize"> {todo.todo} </s>
          </>
        ) : (
          <>
            <span className="capitalize"> {todo.todo} </span>
          </>
        )}
  </>
      
   }

        <div className="action_icons flex items-center gap-3 ">
          <div className="text-xl cursor-pointer"
          onClick={() => {
              if(!todo.isDone){
                setEdit(true)
              }
          }}
          >
            {" "}
            <FaEdit />{" "}
          </div>
          <div className="text-xl cursor-pointer"
                 onClick={() => handleDelete(todo.id)}
            >
            {" "}
            <MdDelete />{" "}
          </div>
          <div
            className="text-xl cursor-pointer"
            onClick={() => handleDone(todo.id)}
          >
            {" "}
            <FaCheckCircle />{" "}
          </div>
        </div>
      </div>
    </form>
  );
};
