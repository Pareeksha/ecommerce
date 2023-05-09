import React from 'react';
import '../styles/card.css'
const Card = ({item, handleClick, handlePress}) => {
    const {title, price, img} = item;
  return (
    <div className='cards'>
      <div className='image'>
        <img src={img} alt="Image" />
      </div>
      <div className='details'>
        <p>{title}</p>
        <p>Rs.{price}</p>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
        <button onClick={()=>handlePress(item)}>Add to Wishlist</button>
      </div>
    </div>
  )
}

export default Card;
