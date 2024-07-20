import styles from "./ProductDisplay.module.css";
import PropTypes from "prop-types";

import { ITEMS_PER_PAGE } from "../constants";
import ProductCard from "./ProductCard";

function ProductDisplay({items, page})
{
    let itemsToDisplay = [...items];
    if (items.length > ITEMS_PER_PAGE)
    {
        const start = page * ITEMS_PER_PAGE;
        itemsToDisplay = itemsToDisplay.splice(start, ITEMS_PER_PAGE);
    }

    return <div className={styles.main}>
        {itemsToDisplay.map((item) =>
            <ProductCard key={item.id} id={item.id} title={item.title} description={item.description} price={item.price} image={item.image}/>
        )}
    </div>
}

ProductDisplay.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    category: PropTypes.string,
    page: PropTypes.number,
}

export default ProductDisplay;