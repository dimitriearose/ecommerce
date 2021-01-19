import React from 'react'
import {Link}from 'react-router-dom'
import {Avatar} from '@material-ui/core'
import {Rating} from '@material-ui/lab'
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
        <Link to={`/product/${id}`}>
            <div className='product'>
                <Avatar src={avatar}/>
                <img src={image} alt={name} />
                <p>{category}</p>
                <p>{details}</p>
                <p>{fineprint}</p>
                <p>{name}</p>
                <p>{seller}</p>
                <Rating value={rating} precision={0.5} />
                <p>{originalprice}</p>
                <p>{price}</p>
            </div>
        </Link>
    )
}

export default Product