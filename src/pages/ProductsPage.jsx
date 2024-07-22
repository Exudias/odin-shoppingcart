import Shop from "../components/Shop";
import { useEffect, useState } from "react";

function ProductsPage() {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setItems(json))
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json))
    }, []);

    document.title = "Faux Gear | Products";

    return <>
        <div className="page-content">
            <Shop items={items} categories={categories}/>
        </div>
    </>
}

export default ProductsPage;