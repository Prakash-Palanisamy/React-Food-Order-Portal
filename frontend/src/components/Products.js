import React from 'react'
import axios from 'axios';
import AllProducts from './AllProducts';
import CartItems from './CartItems';

const Products = () => {
    const [allProducts] = AllProducts();
    const [cartItems] = CartItems();
    let existItem = "";

    const category = localStorage.getItem('categoryname');
  //  console.log(cartItems);
    

    const addCart = (name,price,image,description) =>{
        existItem = cartItems.find((product) => product.name === name);
        //console.log(existItem);
        if(existItem === undefined){
            axios.post('http://localhost:5000/cart/add',
            {  
                name: name,
                image: image,
                price:price,
                description: description 
            });
            window.location.reload(false);
        }
        else {
            window.alert("This Item already added");
        }
       
       // 
       // console.log(name,price,image,description);
    }

    return (
        <>
        {allProducts.map((product) =>(
            product.subItemsData.subītems.map((item) => (
                product.name === category ?
                <div className='prod-container' key={product.name}>
                <div className='prod-details'>
                    <h3>{item.name}</h3>
                    <h4>&#8377; {item.price}</h4>
                    <p>{item.description}</p>
                    <button className='btn' onClick={()=> addCart(item.name,item.price,item.image,item.description)}>Order Now</button>
                </div>
                <div className='prod-img'>
                    <img src={item.image} alt=""/>
                </div>
                </div> :
                null
            ))
           
        ))}
       
        </>
    )
}

export default Products
