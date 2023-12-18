import React from 'react'
import ProductCardBuy from "./ProductCardBuy.jsx"

const ProductListBuy = ({products}) =>{

    return (
            <ul className='productList'>
                {products.map((item, index) => (
                    <li key={index} id={index}>
                        <ProductCardBuy product={item}/> 
                    </li>
                    
                ))}
            </ul>
    )
}
export default ProductListBuy