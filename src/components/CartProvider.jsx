import { createContext, useState } from 'react';
import PropTypes from "prop-types";

const CartContext = createContext([]);

function CartProvider({children})
{
    const [cart, setCart] = useState([]);

    return <CartContext.Provider value={[cart, setCart]}>
        {children}
    </CartContext.Provider>
}

CartProvider.propTypes = {
    children: PropTypes.node,
};

export {CartProvider, CartContext};