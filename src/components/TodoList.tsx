import React from 'react'
import { Todo } from '../models'
import SingleTodo from './SingleTodo';
interface Props{
    todos : Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>{
        todos.map((todo) => {
            return(
                <SingleTodo todo = {todo} key={todo.id} setTodos={setTodos} todos={todos}/>
            )
        })
    }</div>
  )
}

export default TodoList