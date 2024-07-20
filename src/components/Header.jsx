import { Link } from "react-router-dom";
import styles from './Header.module.css';
import NavLink from "./NavLink";
import CartDisplay from "./CartDisplay";
import { useState } from "react";

function Header()
{
    const [showCart, setShowCart] = useState(false);

    function handleCartClick()
    {
        setShowCart(!showCart);
    }

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
        </div>
        <CartDisplay on={showCart} toggle={handleCartClick}/>
    </header>;
}

export default Header;