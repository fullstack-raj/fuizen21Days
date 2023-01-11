import React, { useEffect, useState } from 'react'
import axios from 'axios';

const View = () => {

    const [data, setData] = useState();

    const getData = async () => {
        try {
            const url = 'http://localhost:5000/posts'
            const result: any = await axios.get(url);
            setData(result.data)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default View