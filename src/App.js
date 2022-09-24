import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./About";
import Home from './Home'
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from './SingleProduct'
import Cart from './Cart'
import ErrorPage from './ErrorPage'
const App = () => {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/products' element={<Products />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/singleproduct/:id' element={<SingleProduct />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='*' element={<ErrorPage />} />

    


    </Routes> 
    </BrowserRouter>
  );
};

export default App;
