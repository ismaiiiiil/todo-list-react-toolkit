import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/todoSlice'
import './TodoList.css';

const TodoItem = ({ todo, setId }) => {
    const dispatch = useDispatch();

    const handleDeleteTodo = () => {
        dispatch(deleteTodo({ id: todo.id }));
    }

    return (
        <ul className='d-flex justify-content-center'>
            <div className='list'>
                <span className='mx-3 fw-bold' >{todo.title}</span>
                <span className='mx-3 fw-bold' >{todo.type}</span>
                <span className='btn-delete float-end'
                    onClick={handleDeleteTodo}
                >
                    <i className="fa-solid fa-trash-can"></i>
                </span>
                <span className=' float-end'
                    onClick={() => setId(todo.id)}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </span>
            </div>
        </ul>
    );
}
export default TodoItem;