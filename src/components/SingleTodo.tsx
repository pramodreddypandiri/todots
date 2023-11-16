import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../models';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
interface Props{
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[]
}
const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const handleDone = (id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))

    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map((todo) => (todo.id === id ? {...todo, todo: editTodo} : todo))
        )
        setEdit(false);
    };
    const focusRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        focusRef.current?.focus();
        //console.log("abcd")
    }, [edit]);
  return (
    <form className='todos_single items-center  flex w-[90%]' onSubmit={(e) => {handleEdit(e, todo.id)}}>
        {edit ? <input className='flex-1 border-black border-2 ' value={editTodo} onChange={(e)=>{setEditTodo(e.target.value)}}/> :
        <span className={`todo_text flex-1 ${todo.isDone ? 'line-through' : ''} `}>{todo.todo}</span>}
        <div className='flex flex-row'>
            <span className='icon m-2 p-2' onClick={()=>{if(!edit && !todo.isDone){
                setEdit(!edit)
            }}}><AiFillEdit/></span>
            <span className='icon m-2 p-2' onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
            <span className='icon m-2 p-2' onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo;