import { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";

const CartContext = createContext([]);

function CartProvider({children})
{
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>localStorage.setItem("items", JSON.stringify(json)))
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>localStorage.setItem("categories", JSON.stringify(json)))
    }, []);

    return <CartContext.Provider value={[cart, setCart]}>
        {children}
    </CartContext.Provider>
}

CartProvider.propTypes = {
    children: PropTypes.node,
};

export {CartProvider, CartContext};