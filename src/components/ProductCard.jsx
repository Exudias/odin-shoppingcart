import { useContext, useState } from "react";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";
import { CartContext } from "./CartProvider";

function ProductCard({title, description, price, image, id})
{
    const [cart, setCart] = useContext(CartContext);
    const [amt, setAmt] = useState(1);

    const displayPrice = parseFloat(price).toFixed(2);

    const inCart = isInCart();

    function handleAmountChange(e)
    {
        let val = e.target.value;
        changeAmountTo(val);
    }

    function updateAmount(by)
    {
        changeAmountTo(+amt + +by);
    }

    function changeAmountTo(val)
    {
        if (val < 1) val = 1;
        if (val > 99) val = 99;
        if (!val) val = 1;

        setAmt(val);
    }

    function isInCart()
    {
        const itemIdx = cart.findIndex((e) => e.id === id);
        return itemIdx >= 0;
    }

    function addToCart()
    {
        let newCart = [...cart];

        if (inCart)
        {
            const itemIdx = newCart.findIndex((e) => e.id === id);
            newCart[itemIdx] = { ...newCart[itemIdx], amount: newCart[itemIdx].amount + amt};
        }
        else
        {
            newCart.push({id, title, description, price, image, amount: amt});
        }

        setCart(newCart);
    }

    return <div className={styles.card}>
                <p className={styles.title}>{title}</p>
                <img className={styles.img} src={image} alt=""/>
                <div className={styles.buy}>
                    <p>{"£" + displayPrice}</p>
                    <div className={styles.buyControls}>
                        <button className={styles.adjustBtn} onClick={() => updateAmount(-1)}>-</button>
                        <input type="number" className={styles.buyAmount} value={amt} onChange={handleAmountChange} min={1}/>
                        <button className={styles.adjustBtn} onClick={() => updateAmount(1)}>+</button>
                        <button className={styles.buyBtn} onClick={addToCart}>{inCart ? "Add more" : "Add to cart"}</button>
                    </div>
                </div>
            </div>
}

ProductCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    id: PropTypes.number,
}

export default ProductCard;