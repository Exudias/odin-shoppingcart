import { Link } from "react-router-dom";
import styles from './Header.module.css';

function Header()
{
    return <header className={styles.header}>
        <div className={styles.logoContainer}>
            <Link to="/">
                <img alt="Shop logo" src="./logo.svg" className={styles.logo}/>
                <p>Faux Gear</p>
            </Link>
        </div>
        <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
        </nav>
        <div className={styles.cartContainer}>
            <Link to="/cart"><img alt="Cart" src="./cart.svg" className={styles.cart}/></Link>
        </div>
    </header>;
}

export default Header;