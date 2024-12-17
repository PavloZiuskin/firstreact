import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // Масив завдань
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;