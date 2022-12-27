import axios from 'axios';
import React, { useState } from 'react'

const ProductView = () => {

  const [product, setProduct] = useState();

  const url = 'https://dummyjson.com/products/1'
  const getProduct = async () => {
    try {
      
      const product = await axios.get(url);
      const result = product
      console.log(result);
      //setProduct(result);
    } catch (e) {
      console.log(e);
    }
  }
  getProduct();
  return (
    <>

    </>
  )
}

export default ProductView