import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0, // Початкове значення лічильника
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1; // Збільшення значення
        },
        decrement: (state) => {
            state.value -= 1; // Зменшення значення
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;