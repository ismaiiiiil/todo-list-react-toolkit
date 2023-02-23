import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/todoSlice";
import "./AddToDoForm.css";

const AddToDoForm = ({id}) => {
    
    const todos = useSelector((data) => data.todos);
    const todo = todos.find(t => t.id === parseInt(id));
    
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    
    useEffect(() => {
        if(todo) {
            setTitle(todo.title);
            setType(todo.type);
        }
    },[id]);

    const dispatch = useDispatch();

    const handlerAdd = () => {
        if (title && type) {
            dispatch(addTodo({ title: title, type: type }));
        }
        setTitle("");
        setType("");
    };

    const handlerUpdate = () => {
        if (title && type) {
            dispatch(updateTodo({id:id, title: title, type: type }));
        }
        setTitle("");
        setType("");
    }

    return (
        <div className="form" >
            <div className="d-flex">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a Name..."
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a Type..."
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                /> 
                {
                    id ?
                    <button className="add-btn bg-white text-dark float-end" 
                    type="button"
                    onClick={handlerUpdate}
                    >
                        <i className="fa-solid fa-edit"></i>
                    </button>
                    :
                    <button className="add-btn bg-white text-dark float-end"
                    type="button"
                    onClick={handlerAdd}
                    >
                        <i className="fa-solid fa-plus"></i>
                    </button>
                }
                

            </div>
        </div>
    );
};

export default AddToDoForm;
