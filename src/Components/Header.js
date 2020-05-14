import React from 'react';   
import '../Css/Header.css';
import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const productcart = useSelector(state => state.addProductToCart); 
  return (
    <div className="navbar"> 
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
  <Link to="/cart">Cart ( {productcart.length} )</Link>  
    </div>
  );
}

export default Header;
