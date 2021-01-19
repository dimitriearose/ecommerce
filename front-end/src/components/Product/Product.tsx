import React from 'react'
import {Link}from 'react-router-dom'
import {Avatar} from '@material-ui/core'
import {Rating} from '@material-ui/lab'
import currencyFormatter from 'currency-formatter'
import './Product.scss'

interface ProductProps {
    id: string
    name: string
    category: string
    price: number
    originalprice: number
    rating: number
    seller: string
    image: string
    avatar: string
    details: string
    fineprint: string
}


function Product({id,avatar,category,details,fineprint,image,name,originalprice,price,rating,seller}:ProductProps) {
    return (
        
            <div className='product'>
                    <Link to={`/product/${id}`}>
                        <img className="product__img" src={image} alt={name} />
                        <p className='product__category'>{category}</p>
                        <p className='product__name'>{name}</p>
                        <p className='product__seller'>{seller}</p>
                        <Rating value={rating} precision={0.5} />
                        <p className="product__price">{currencyFormatter.format(price,{locale:'en-US'})}</p>
                        <Avatar src={avatar}/>
                    </Link>
            </div>
        
    )
}

export default Product
