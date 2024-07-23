import { Link } from "react-router-dom";
import styles from '../styles/Header.module.css';
import NavLink from "./NavLink";
import CartDisplay from "./CartDisplay";
import { useState, useContext } from "react";
import { CartContext } from "./CartProvider";

function Header()
{
    const [showCart, setShowCart] = useState(false);
    const [cart] = useContext(CartContext);

    function handleCartClick()
    {
        setShowCart(!showCart);
    }

    function getItemsInCart(cart)
    {
        return cart.reduce((acc, curr) => +acc + +curr.amount, 0);
    }

    const itemsInCart = getItemsInCart(cart);

    return <header className={styles.header}>
        <div className={styles.logoContainer}>
            <Link to="/">
                <img alt="Shop logo" src="./logo.svg" className={styles.logo}/>
                <p>Faux Gear</p>
            </Link>
        </div>
        <div className={styles.spacer}/>
        <nav className={styles.nav}>
            <NavLink path="/" title="Home"/>
            <NavLink path="/products" title="Products"/>
            <NavLink path="/about" title="About"/>
        </nav>
        <div className={styles.spacer}/>
        <div className={styles.cartContainer}>
            <img alt="Cart" src="./cart.svg" className={styles.cart} onClick={handleCartClick}/>
            {itemsInCart > 0 && <div className={styles.cartCounter}>{itemsInCart}</div>}
        </div>
        <CartDisplay on={showCart} toggle={handleCartClick}/>
    </header>;
}

export default Header;