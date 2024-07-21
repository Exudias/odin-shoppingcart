import styles from "./CartProductDisplay.module.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "./CartProvider";

function CartProductDisplay({title, amount, price, image, id})
{
    const [cart, setCart] = useContext(CartContext);

    function deleteItemFromCart()
    {
        let newCart = [...cart];
        newCart = newCart.reduce((a, b) => (b.id !== id && a.push(b), a), []);

        setCart(newCart);
    }

    function editAmountInCart(newAmount)
    {
        if (newAmount < 1) newAmount = 1;
        if (newAmount > 99) newAmount = 99;
        if (!newAmount) newAmount = 1;

        let newCart = [...cart];
        const itemIndex = newCart.findIndex((e) => e.id === id);
        newCart[itemIndex].amount = newAmount;
        setCart(newCart);
    }

    function handleAmountChange(e)
    {
        editAmountInCart(e.target.value);
    }

    const totalPriceFixed = parseFloat(price * amount).toFixed(2);
    const displayPrice = "£" + totalPriceFixed;

    return <div className={styles.main}>
        <div className={styles.imgContainer}>
            <img src={image} className={styles.displayImg}/>
            <div className={styles.amountCounter}>{amount}</div>
        </div>
        <div className={styles.content}>
            <p>{title}</p>
            <p>{displayPrice}</p>
            <div className={styles.buyControls}>
                <button className={styles.adjustBtn} onClick={() => editAmountInCart(amount-1)}>-</button>
                <input type="number" className={styles.buyAmount} value={amount} onChange={handleAmountChange} min={1}/>
                <button className={styles.adjustBtn} onClick={() => editAmountInCart(amount+1)}>+</button>
            </div>
        </div>
        <div className={styles.delBtn} onClick={deleteItemFromCart}>X</div>
    </div>
}

CartProductDisplay.propTypes = {
    title: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
}

export default CartProductDisplay;