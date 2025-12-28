import { FaPlus } from "react-icons/fa";

 interface TodoType  {
   todo : string;
   setTodo: React.Dispatch<React.SetStateAction<string>>;
   handleAddTodo : (e:React.FormEvent) => void
 }


export const InputField = ({todo,setTodo,handleAddTodo}:TodoType) => {
  return (
    <div className="mt-4">
        <form action=""  onSubmit={handleAddTodo} className="w-full  flex">
             <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className=" w-[90%] py-2 px-3 border rounded-sm border-cyan-300 font-semibold text-"  placeholder="Write Your Task"/>

              <button className="w-[10%] bg-cyan-400 text-white rounded-sm py-2 px-3 ml-1 flex justify-center items-center gap-2 cursor-pointer">
                  Add <FaPlus className="text-sm"/>
              </button>
        </form>
    </div> 
  )
}
