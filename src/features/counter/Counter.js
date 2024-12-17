import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/counter/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value); // Отримання значення з Redux store
    const dispatch = useDispatch(); // Доступ до dispatch для відправки actions

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button
                onClick={() => dispatch(increment())}
                style={{ fontSize: '20px', margin: '10px', padding: '10px' }}
            >
                +
            </button>
            <button
                onClick={() => dispatch(decrement())}
                style={{ fontSize: '20px', margin: '10px', padding: '10px' }}
            >
                -
            </button>
        </div>
    );
};

export default Counter;
