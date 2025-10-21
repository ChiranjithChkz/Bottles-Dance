import React from 'react';
import './bottle.css';
const Bottle = ({ bottle, handleAddToCart }) => {
    const { img, name, price, stock } = bottle;
    console.log(bottle.price)
    return (
        <div className='card'>
            <img className='bottle' src={img} alt="" />
            <h2>{name}</h2>
            <h1>${price}</h1>
            <p>{stock} remaining </p>
            <button onClick={() =>handleAddToCart(bottle)} className='btn'>Buy Now</button>
        </div>
    );
};

export default Bottle;