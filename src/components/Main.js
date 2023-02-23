import React, {useState} from 'react'
import './Main.css';
import TodoList from './TodoList'
import AddToDoForm from './AddToDoForm';

const Main = () => {
    const [id, setId] = useState(0);

    return (
        <div className='app'>
            <h1 className='title text-white'>
                Todo list
            </h1>    
            <AddToDoForm id={id} />
            <TodoList setId={setId}/>
        </div>
    )
}

export default Main
