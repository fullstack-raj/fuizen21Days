import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const countInital = () => {
    console.log('countInital');
    return 4
}
const Products = (data) => {
  
    const [state, setState] = useState({count:4, theme:"dark"});
    const count = state.count
    const theme = state.theme
    
    // const [count, setCount] = useState(countInital()); // render multiple times

    // const [count, setCount] = useState(0);

    // const [count, setCount] = useState(() =>{
    //     console.log("run function");
    //     return 4
    // }); // run only when function load

    const decrementCount = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count - 1}
        })

        // setCount(prevCount => prevCount - 1)
        // setCount(prevCount => prevCount - 1)
    }
    const incrementCOunt = () => {
        //setCount(count + 1)
    }

    return (
        <>
        <div>
            {theme}
        </div>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCOunt}>+</button>


            {

                data?.data?.products?.map(item => (
                    <div className="main-card">
                        <div className="main-image">
                            <img src={item.thumbnail} />
                        </div>
                        <Link to={`/product${item.id}`}>
                            <div className="main-card-bottom-card">
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>
                                <div className="main-card-bottom-card-stock">
                                    {item.price}
                                    {item.stock}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default Products