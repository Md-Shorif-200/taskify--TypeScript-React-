import { FaCheckCircle, FaEdit } from "react-icons/fa";
import type { Todo } from "../Common/model";
import { MdDelete } from "react-icons/md";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {

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

  }

  return (
    <form>
      <div className="bg-cyan-400 text-white rounded-md flex justify-between items-center px-4 py-3">
        {todo.isDone ? (
          <>
            <s className="capitalize"> {todo.todo} </s>
          </>
        ) : (
          <>
            <span className="capitalize"> {todo.todo} </span>
          </>
        )}

        <div className="action_icons flex items-center gap-3 ">
          <div className="text-xl cursor-pointer">
            {" "}
            <FaEdit />{" "}
          </div>
          <div className="text-xl cursor-pointer">
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
