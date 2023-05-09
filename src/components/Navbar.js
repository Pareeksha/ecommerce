import React from 'react';
import '../styles/navbar.css';


const Navbar = ({size, setShow, setState}) => {
  return (
    <nav>
        <div className="nav_box">
            <span  className="ecom" onClick={()=>(setShow(true) ,setState(true))}>
                E-Commerce Website
            </span> 
            
            <span className="wish" onClick={()=>(setState(false),setShow(true))} >Wishlist </span>
             <div className="cart" onClick={()=>(setShow(false))}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div> 
            
            
        </div>
        
    </nav>
  )
}

export default Navbar;
