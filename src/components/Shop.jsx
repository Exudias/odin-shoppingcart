import { useState } from "react";
import ProductDisplay from "./ProductDisplay";
import styles from "./Shop.module.css";
import PropTypes from "prop-types";
import { capitaliseWord } from "../utils/capitaliseWord";
import { ITEMS_PER_PAGE } from "../constants";

function Shop({items, categories})
{
    const [page, setPage] = useState(0);
    const [category, setCategory] = useState("all");

    const itemsToShow = category === "all" ? items : 
    items.filter((item) => item.category === category);

    const pages = Math.ceil(itemsToShow.length / ITEMS_PER_PAGE);
    const elementsArray = Array.from({ length: pages }, (_, index) => index);

    function handleCategoryChange(e)
    {
        setPage(0);
        setCategory(e.target.value);
    }

    function handlePageChange(num)
    {
        setPage(num);
    }

    const pagesDiv = (<div className={styles.pages}>
                {elementsArray.map((val) => 
                    <button key={val} onClick={() => handlePageChange(val)} disabled={page === val}>{val + 1}</button>
                )}
            </div>);

    return <div className={styles.container}>
        <select className={styles.select} onChange={handleCategoryChange}>
            <option value="all">All</option>
            {categories.map((v, idx) => 
                <option key={idx} value={v}>{capitaliseWord(v)}</option>
            )}
        </select>
        {pages > 1 && pagesDiv}
        <ProductDisplay items={itemsToShow} page={page}/>
        {pages > 1 && pagesDiv}
    </div>
}

Shop.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    categories: PropTypes.arrayOf(PropTypes.string),
}

export default Shop;