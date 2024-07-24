import { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { preloadImage } from '../utils/preloadImage';

const CartContext = createContext([]);

function CartProvider({children})
{
    const [cart, setCart] = useState([]);

    function handleItems(json)
    {
        localStorage.setItem("items", JSON.stringify(json));

        const imageURLs = json.map((item) => item.image);
        Promise.all(imageURLs.map(preloadImage))
        .then(console.log("Successfully cached images!"))
        .catch((err) => {
        console.error("Failed caching images! ", err);
        });
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>handleItems(json))
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