import React, { useEffect, useState } from 'react';


import './Shop.css'
import Product from './../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products,setProducts]=useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const handelAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
    }

    return (
        <div className="products-contaner">
           <div className="product-container">
               <h2>product  {products.length}</h2>
               {
                   products.map(product => <Product
                     product={product}
                    key={product.key}
                    handelAddToCart={handelAddToCart}
                    >
                     </Product>)
               }

           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;