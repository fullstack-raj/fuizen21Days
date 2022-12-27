import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {

    const [products, setProducts] = React.useState();

    const url = "https://dummyjson.com/products";

    const getProducts = async () => {
        try {
            const products = await axios.get(url);
            const result = products.data.products;
            console.log(result);
            setProducts(result);
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getProducts();
    }, [])


    return (
        <>
            {

                products?.map(item => (

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