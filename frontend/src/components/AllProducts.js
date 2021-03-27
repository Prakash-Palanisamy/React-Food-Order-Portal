import { useEffect, useState } from "react"

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/products/getAll`)
        .then((response) => response.json())
        .then(({allProducts }) => {
            setAllProducts(allProducts);
        });
    }, []);

    return [allProducts]
}

export default AllProducts
