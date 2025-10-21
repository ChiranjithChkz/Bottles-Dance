import React, { use, useState } from 'react';
import Bottle from '../bottle/bottle';
import './Bottles.css'

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([]);

    const bottles = use(bottlesPromise);

    const handleAddToCart = (bottle)=>{
        console.log("bottle add ",bottle)
    }

    //  console.log(bottles);
    return (
        <div >
            <h3>Bottles: {bottles.length}</h3>
            <div className='Bottles'>
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        handleAddToCart={handleAddToCart}
                        bottle={bottle}></Bottle>)

                }
            </div>
        </div>
    );
};

export default Bottles;