import Shop from "../components/Shop";

function ProductsPage() {
    document.title = "Faux Gear | Products";

    const items = JSON.parse(localStorage.getItem("items"));
    const categories = JSON.parse(localStorage.getItem("categories"));
    
    return <>
        <div className="page-content">
            {items && categories && <Shop items={items} categories={categories} /> || 
            <h1 style={{textAlign: "center"}}>Loading...</h1>}
        </div>
    </>
}

export default ProductsPage;