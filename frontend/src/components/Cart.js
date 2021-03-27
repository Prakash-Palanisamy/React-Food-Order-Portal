import React from 'react'
import axios from 'axios';
import CartItems from './CartItems';
import { useState } from "react"

const Cart = () => {

    const [cartItems] = CartItems();
    const [message, setMessage] = useState("You have Ordered");

 
    const deleteItem =(id) =>{
       // console.log(id);
        axios.delete(`http://localhost:5000/cart/deleteItem/${id}`);
        window.location.reload();
      };
    const placeOrder =() => {
        axios.delete(`http://localhost:5000/cart/deleteAll`);
        window.alert("Your order placed successfully")
        setMessage("Thanks for shopping");
        window.location.replace("/");
    }

    return (
        <div >
            <h1>{message}</h1>
        {cartItems.map((product) => (
            <div className='prod-container' key={product.name}>
            <div className='prod-details'>
                <h3>{product.name}</h3>
                <h4>&#8377; {product.price}</h4>
                <p>{product.description}</p>
                <button className='btn' onClick={()=> deleteItem(product._id)} >Remove</button>
            </div>
            <div className='prod-img'>
                <img src={product.image} alt=""/>
            </div>
            </div> 
        ))}


        <button disabled={cartItems.length > 0 ? false : true} className='btn' onClick={()=> placeOrder()} >Place Order</button>
        </div>
       
   
    )
}

export default Cart
