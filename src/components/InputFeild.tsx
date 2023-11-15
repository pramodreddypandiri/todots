import React, {useRef} from 'react'
interface Props  {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}
const InputFeild = ({todo, setTodo, handleAdd}: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
       <form onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
       }} className='flex  flex-row w-[90%] items-center relative'>
            <input className='m-2 w-full border-2 border-black p-2 rounded-lg' placeholder='Enter a task' value={todo}onChange={(e) => {setTodo(e.target.value)}}></input>
            <button className='m-4 p-1 bg-black rounded-lg absolute right-0 text-white hover:bg-white hover:text-black'>Add</button>
       </form>
    </div>
  )
}

export default InputFeild