import React from 'react'
import Header from '../Components/Header';
import { FiHome } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";
import axios from 'axios';



const Groups = () => {

  const navigation = [
    {
      text: 'Home',
      icon: <FiHome />,
    },
    {
      text: 'My network',
      icon: <FiCpu />,
    },
    {

    }
  ]

  const url = "https://dummyjson.com/products";
  //const url = "https://jsonplaceholder.typicode.com/posts";
  // const options = {
  //   method: "Get",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json;charset=UTF-8",
  //   },
  // };
   fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data, 'Dataaa');
    });

  const getData = async () => {
    try {
      const result = await axios.get(url);
      console.log(result.data, 'Response')
    } catch (err) {
      throw (err);
    }
  }
  getData();

  return (
    <Header props={navigation} />
  )
}

export default Groups