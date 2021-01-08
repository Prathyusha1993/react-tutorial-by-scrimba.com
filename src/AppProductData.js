import React from "react";
import productsData from "./functional-components/productsData";
import ProductsDisplay from "./functional-components/productsDisplay";

function AppProductData () {
    const productComponent = productsData.map(product => {
        return <ProductsDisplay key={product.id} name={product.name} price={product.price} desc={product.desc}/>
    })
    return (
        <div>
            {productComponent}
        </div>
    );
}

export default AppProductData;