import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

function ProductCard({title, description, price, image})
{
    return <div className={styles.card}>
                <h1>{title}</h1>
                <img className={styles.img} src={image} alt=""/>
                <h3>{price}</h3>
            </div>
}

ProductCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
}

export default ProductCard;