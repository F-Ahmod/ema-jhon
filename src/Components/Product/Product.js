import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
   const{name , img , seller ,price,stock}=props.product;
   const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
        </div>
        <div className="product-info">
           <h3 className="p-name"> {name}</h3>
           <p><small>by : {seller}</small> </p>
           <h3>price : {price}</h3>
           <p><small>left in stock: {stock}</small></p>
           <button onClick={()=>props.handelAddToCart(props.product)}
           className="btnn">{cartIcon} add to Cart</button>
        </div>
            
        </div>
    );
};

export default Product;