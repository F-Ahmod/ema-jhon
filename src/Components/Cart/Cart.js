import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {cart}=props
    let total=0
    for (const product of cart)
       total=total +product.price
       const shipping=total > 0 ? 15: 0;
       const tax=(total+shipping)*0.10;
       const Grandtotal=total+shipping+tax
    return (
        <div>
           <h2>Order Summary </h2>
           <h4>items count: {props.cart.length}</h4> 
           <h3>price {total.toFixed(2)}</h3>
           <h3>shipping: {shipping.toFixed(2)}</h3>
           <h3>tax : {tax.toFixed(2)}</h3>
           <h1>total : {Grandtotal.toFixed(2)}</h1>
           <button className="btnn">total   taka</button>
        </div>
    );
};

export default Cart;