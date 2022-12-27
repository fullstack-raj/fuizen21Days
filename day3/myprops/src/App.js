
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Products from './Pages/Products';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import ProductView from './Pages/ProductView';

function App() {
  return (
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
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductView />} />

      </Routes>
    </HashRouter>
  );
}

export default App;
