import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

function ProductCard({title, description, price, image})
{
    const displayPrice = parseFloat(price).toFixed(2);

    return <div className={styles.card}>
                <p className={styles.title}>{title}</p>
                <img className={styles.img} src={image} alt=""/>
                <h3>{"£" + displayPrice}</h3>
            </div>
}

ProductCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
}

export default ProductCard;