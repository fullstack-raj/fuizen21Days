
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Products from './Pages/Products';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import ProductView from './Pages/ProductView';

import { useTranslation, initReactI18next, I18nextProvider } from "react-i18next";
import React, { useEffect, useState } from 'react';
import loadTranslations from './i18n/i18n'
import i18next from 'i18next';
import axios from 'axios';
import i18n from './i18n/i18n';

function App() {


  const getLanguageDataFromAPI = async () => {
    const response = await fetch('https://dummyjson.com/products');
    return response.json();
  }

  const initalzeI18n = async () => {
    const langugeData = await getLanguageDataFromAPI();
    let languge = { ...langugeData?.products[0], test: "From api", };
    i18n.init({
      resources: {
        en: {
          translation: languge,
        },
        de: {
          translation: {
            "title": 'local Rajashekhar wwwwwwww',
            "test": "Hallo Welt",
          }
        }
      }
    })
  }

  const fetchData = async () => {

    // await axios.get('https://burgers-hub.p.rapidapi.com/burgers',
    //   {
    //     headers: {
    //       'X-RapidAPI-Key': '68551e5b25msha3d7d7196d6d425p1626d6jsn3303c315af0c',
    //       'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
    //     }
    //   }).then(function (response) {
    //     console.log(response.data);
    //   }).catch(function (error) {
    //     console.error(error);
    //   });


    // const encodedParams = new URLSearchParams();
    // encodedParams.append("q", "English is hard, but detectably so");

    // const options = {
    //   method: 'POST',
    //   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     'Accept-Encoding': 'application/gzip',
    //     'X-RapidAPI-Key': '68551e5b25msha3d7d7196d6d425p1626d6jsn3303c315af0c',
    //     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    //   },
    //   data: encodedParams
    // };

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });

  }

  useEffect(() => {
    i18n.changeLanguage('en');
    initalzeI18n();

  }, [])

  // ------------------------

  // --------------------


  const [data, setData] = useState();

  const getData = async () => {
    const url = 'https://dummyjson.com/products';
    const response = await axios.get(url, {
      headers: { 'Content-Type': 'application/json' }
    });
    setData(response.data);
    return response
  }


  useEffect(() => {
    getData();
  }, [])



  return (
    <I18nextProvider i18n={i18n}>
      <HashRouter>
        <Link to='/home'>Home</Link>
        <Link to='/aboutus'>About Us</Link>
        <Link to='/contactus'>Conatct us</Link>
        <Link to='/products'>Products</Link>
        {/* <Link to='/product/:id'>Products</Link> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/products" element={<Products data={data} />} />
          <Route path="/product/:id" element={<ProductView />} />

        </Routes>
      </HashRouter>
    </I18nextProvider>
  );
}

export default App;
