import React, {useEffect, useState} from 'react'
import '../styles/cart.css'

const Wishlist = ({wish, setWish}) => {
  
  

  const handleRemove = (id) => {
    const arr = wish.filter((item)=>item.id!=id);
    setWish(arr);
  }

  return (
    <article>
      {
        wish?.map((item) =>
        (
          <div className='cart_layout' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} alt="image" />
              <p>{item.title}</p>
          </div>
          
            <span>Rs.{item.price}</span>
            <button onClick={()=>handleRemove(item.id)}>remove</button>
          </div>
          
        ))
      }
      
    </article>
  )
}

export default Wishlist
