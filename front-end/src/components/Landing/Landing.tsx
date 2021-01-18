import React from 'react'
import './Landing.scss'
import products from '../../db/products'
import Product from '../Product/Product'

function Landing() {
    return (
        <div className="landing">
            {products.map((product) => {
                return <Product id={product._id} key={product._id} name={product.name} category={product.category} price={product.price} originalprice={product.originalprice} rating={product.rating} seller={product.seller} image={product.courseimg} avatar={product.avatar} details={product.details} fineprint={product.fineprint} />
            })}
        </div>
    )
}

export default Landing
