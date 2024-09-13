import React, { useState } from 'react'

export default function MyCounter() {
    const [counter, setCounter] = useState<number>(0);
    const Increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        setCounter(counter - 1);
    }
    const Multiplication = () => {
        setCounter(counter * 2);
    }
    const Divided = () => {
        setCounter(counter / 2);
    }
    return (
        <div>
            {counter}
            <button onClick={Increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={Multiplication}>*</button>
            <button onClick={Divided}>/</button>
        </div>

    )
}
