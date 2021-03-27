import React from 'react'
import CartItems from './CartItems';

const Header = () => {
    const [cartItems] = CartItems();

    return (
        <div className='header'>
           <a href="/"> <h1>Food Odering Portal</h1> </a>
            <a href="/cartItems"><h4>&#128722; {cartItems.length}</h4></a>
            
        </div>
    )
}

export default Header
