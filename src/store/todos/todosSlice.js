import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
    error: null,
};
export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({ text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.items[action.payload];
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.items.splice(action.payload, 1);
        },
        clearTodos: (state) => {
            state.items = [];
        },
        fetchTodosStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchTodosSuccess: (state, action) => {
            state.loading = false;

            // Додаємо нові TODO лише, якщо вони ще не існують
            const newTodos = action.payload.filter(
                (newTodo) => !state.items.some((todo) => todo.text === newTodo.text)
            );
            state.items = [...state.items, ...newTodos];
        },
        fetchTodosFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, clearTodos, fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } =
    todosSlice.actions;

export const fetchTodos = () => async (dispatch) => {
    try {
        dispatch(fetchTodosStart());
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        const data = await response.json();

        const formattedTodos = data.map((item) => ({ text: item.title, completed: false }));
        dispatch(fetchTodosSuccess(formattedTodos));
    } catch (error) {
        dispatch(fetchTodosFailure(error.message));
    }
};

export default todosSlice.reducer;

