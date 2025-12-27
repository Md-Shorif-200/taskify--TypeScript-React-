
 interface TodoType  {
   todo : string;
   setTodo: React.Dispatch<React.SetStateAction<string>>
 }


export const InputField = ({todo,setTodo}:TodoType) => {
  return (
    <div className="mt-4">
        <form action="">
             <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className="w-1/2 py-2 px-3 border rounded-sm border-cyan-300 font-semibold text-"  placeholder="Write Your Task"/>

              <button className="w-[100px] bg-cyan-400 text-white rounded-sm py-2 px-3 ml-1">
                  Add 
              </button>
        </form>
    </div> 
  )
}
