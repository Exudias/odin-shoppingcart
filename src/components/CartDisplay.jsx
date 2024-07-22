import { useContext } from "react";
import { CartContext } from "./CartProvider";
import styles from "../styles/CartDisplay.module.css";
import PropTypes from "prop-types";
import CartProductDisplay from "./CartProductDisplay";

function CartDisplay({on, toggle})
{
    const [cart] = useContext(CartContext);
    
    function calculateCostFromCart(cart)
    {
        return cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
    }

    function getItemsInCart(cart)
    {
        return cart.reduce((acc, curr) => +acc + +curr.amount, 0);
    }

    return (
    <div className={`${styles.main} ${on ? styles.enabled : styles.disabled}`}>
        <button onClick={toggle} className={styles.close}>X</button>
        <h1>Cart ({getItemsInCart(cart)})</h1>
        {cart.map((e) => 
            <CartProductDisplay key={e.id} id={e.id} title={e.title} amount={e.amount} price={e.price} image={e.image}/>
        )}
        <h1>Total: {"£" + parseFloat(calculateCostFromCart(cart)).toFixed(2)}</h1>
    </div>);
}

CartDisplay.propTypes = {
    on: PropTypes.bool,
    toggle: PropTypes.func,
};

export default CartDisplay;