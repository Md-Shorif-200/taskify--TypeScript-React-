import { useState } from "react";
import Container from "./Container";
import { InputField } from "./InputField";


export default function Home() {
     const [todo,setTodo] = useState<string>('');
      console.log(todo);
      
  return (
    <div className=" w-full min-h-screen bg-gray-100">
        <Container>
                <div className="">
                      <h1 className="text-4xl capitalize font-bold text-cyan-500 pt-4"> taskify </h1>
                       <InputField todo={todo} setTodo={setTodo} />
                </div>
        </Container>
    </div>
  )
}
