import axios from 'axios';
import React, { useState, useEffect } from 'react'

const TestEffect = () => {

    const [stateValue, setStateValue] = useState();

    const getData = async (value) => {
        const url = `https://jsonplaceholder.typicode.com/${value}`;
        const response = await axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        });
        setStateValue(response.data);
        return response
    }


    useEffect(() => {
        console.log('111111111111111111111');
    })


    useEffect(() => {
        console.log('rendering2222222222222222222');
        getData('users');
    }, [])


    const [photos, setPhotos] = useState();
    useEffect(() => {
        if (photos) {
            getData('photos');
        }
    }, [photos])


    const TestFun = () => {
        setPhotos(1)
    }


    return (
        <div>
            <button onClick={() => getData('posts')}>posts</button>
            <button onClick={() => getData('comments')}>comments</button>
            <button onClick={() => TestFun()}>photos</button>

            <div>
                <h1>   {JSON.stringify(stateValue)}</h1>
            </div>
        </div>
    )
}

export default TestEffect