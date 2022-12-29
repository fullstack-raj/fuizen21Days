
import React, { useState } from "react";

const Count = () => {

    const [count, setCount] = useState(100);

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    };

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Count