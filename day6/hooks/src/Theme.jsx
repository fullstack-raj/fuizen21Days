import React, { useState } from "react";

const Theme = () => {
    let Countvalue = 100;
    const [state, setState] = useState({ theme: 'red',  count: Countvalue });
    const count = state.count;
    const theme = state.theme;

    const decrement = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count - 1, }
        })
    }
    const increment = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count + 1}
        })
}

return (
    <div style={{backgroundColor: theme? theme : 'heloooooooooo'}}>
        <button onClick={decrement}>-</button>
        <span>{count} | {theme}</span>
        <button onClick={increment}>+</button>
    </div>
)
}

export default Theme