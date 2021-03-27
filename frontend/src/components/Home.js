import React from 'react'
import { Link } from 'react-router-dom';
import AllProducts from './AllProducts';

const Home = () => {
   
    const [allProducts] = AllProducts();


    const category = (productname) =>{
        localStorage.clear();
         localStorage.setItem('categoryname',productname);
    }

   
    return (
        <div className="container">
            {allProducts.map((product) => (
            <div className="card" key={product._id}>
                <Link to={`/products?name=${product.name}`} onClick={()=> category(product.name)}>
                    <img src={product.image} alt=""/>
                    <h3>{product.name}</h3>
                </Link>
               
           </div>
            ))}
        </div>
    )
}

export default Home
