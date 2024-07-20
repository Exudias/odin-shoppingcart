import { useState } from "react";
import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

function ProductCard({title, description, price, image})
{
    const [amt, setAmt] = useState(0);

    const displayPrice = parseFloat(price).toFixed(2);

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
        if (val < 0) val = 0;
        if (val > 99) val = 99;
        if (!val) val = 0;

        setAmt(val);
    }

    return <div className={styles.card}>
                <p className={styles.title}>{title}</p>
                <img className={styles.img} src={image} alt=""/>
                <div className={styles.buy}>
                    <p>{"£" + displayPrice}</p>
                    <div className={styles.buyControls}>
                        <button className={styles.adjustBtn} onClick={() => updateAmount(-1)}>-</button>
                        <input type="number" className={styles.buyAmount} value={amt} onChange={handleAmountChange} min={0}/>
                        <button className={styles.adjustBtn} onClick={() => updateAmount(1)}>+</button>
                        <button className={styles.buyBtn}>Add to cart</button>
                    </div>
                </div>
            </div>
}

ProductCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
}

export default ProductCard;