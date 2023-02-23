import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import './TodoList.css';



const TodoList = ({setId}) => {

    const ListTodos = useSelector(state => state.todos)

    return (
        <>
            {ListTodos.map(todo => (
                <span className='text-white' key={todo.id}>
                    <TodoItem todo={todo} setId={setId} />
                </span>

            ))}

        </>
    )
}

export default TodoList
