import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "apple",type:"fruit"},
        { id: 2, title: "mango",type:"fruit"},
        { id: 3, title: "tomato",type:"legume"},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                type:action.payload.type
            }
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state,action) => {
            const todo = state.find(todo => todo.id === parseInt(action.payload.id));
            if(todo) {
                todo.title = action.payload.title;
                todo.type = action.payload.type;
            }
        }

    },
});

export const { addTodo, deleteTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;