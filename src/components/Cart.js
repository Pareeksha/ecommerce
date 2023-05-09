import React, {useEffect, useState} from 'react'
import '../styles/cart.css'

const Cart = ({cart, setCart, handleChange}) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () =>{ 
    let ans=0;
    cart.map((item)=>(
      ans += item.price * item.amount
    ))
    setPrice(ans);
  }

  useEffect(()=>{
    handlePrice();
  
  })

  const handleRemove = (id) => {
    const arr = cart.filter((item)=>item.id!=id);
    setCart(arr);
  }

  return (
    <article>
      {
        cart?.map((item) =>
        (
          <div className='cart_layout' key={item.id}>
            <div className='cart_img'>
              <img src={item.img} alt="image" />
              <p>{item.title}</p>
          </div>
          <div>
            <button onClick={()=>handleChange(item, +1)}> + </button>
            <button>{item.amount}</button>
            <button onClick={()=>handleChange(item, -1)}> - </button>
          </div>
          <div>
            <span>Rs.{item.price}</span>
            <button onClick={()=>handleRemove(item.id)}>remove</button>
          </div>
          </div>
        ))
      }
      <div className='total'>
        <span>Total price in your Cart</span>
        <span>Rs.{price}</span>
      </div>
      <br />
      <div className='location'> 
        <select className='location'>
          <option selected value="location" disabled>Choose Location</option>
          <option value="india">India</option>
          <option  value="japan">Japan</option>
          <option value="us">US</option>
      </select>
      </div>
      <br />
      <div className='checkout'>
        <button className='button'>Checkout as a Guest</button>
        <button className='button'>Checkout as a User</button>
      </div>
    </article>
  )
}

export default Cart
