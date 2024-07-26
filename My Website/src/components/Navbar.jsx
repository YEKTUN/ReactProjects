import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";


function Navbar() {
 
  
  
 
  
  

  return (
    
  
    <div>
      <nav>
      
      
        
      <h1><Link to="/">TUNÇER</Link></h1>
     
      <ul>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      </nav>
      
    </div>
  );
}

export default Navbar;
