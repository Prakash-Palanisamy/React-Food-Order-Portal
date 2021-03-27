import { useEffect, useState } from "react"

const CartItems = () => {
    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/cartproducts/getAll`)
        .then((response) => response.json())
        .then(({cartProducts }) => {
            setCartProducts(cartProducts);
        });
    }, []);

    return [cartProducts]
}

export default CartItems
