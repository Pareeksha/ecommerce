import React from 'react';
import list from '../data';
import '../styles/product.css';
import Card from './Card'

const Product = ({handleClick, handlePress}) => {
  return (
    <section>
        {

            list.map((item) => (
            < Card key={item.id} item={item} handleClick={handleClick} handlePress={handlePress}/>))
    
        }
    </section>
)
}

export default Product;
