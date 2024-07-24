import { useContext, useRef } from "react";
import { CartContext } from "./CartProvider";
import styles from "../styles/CartDisplay.module.css";
import PropTypes from "prop-types";
import CartProductDisplay from "./CartProductDisplay";
import useClickOutside from "../utils/useClickOutside";

function CartDisplay({on, toggle})
{
    const ref = useRef();
    useClickOutside(ref, () => on && toggle());

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
    <div ref={ref} className={`${styles.main} ${on ? styles.enabled : styles.disabled}`}>
        <button onClick={toggle} className={styles.close}>X</button>
        <div className={styles.title}>Cart ({getItemsInCart(cart)})</div>
        <div className={styles.products}>
            {cart.length > 0 ? cart.map((e) => 
            <CartProductDisplay key={e.id} id={e.id} title={e.title} amount={e.amount} price={e.price} image={e.image}/>
            ) : <h1 style={{textAlign: "center"}}>Cart empty</h1>}
        </div>
        <div className={styles.total}>Total: {"£" + parseFloat(calculateCostFromCart(cart)).toFixed(2)}</div>
    </div>);
}

CartDisplay.propTypes = {
    on: PropTypes.bool,
    toggle: PropTypes.func,
};

export default CartDisplay;