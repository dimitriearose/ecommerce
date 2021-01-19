import React from 'react'
import {Link}from 'react-router-dom'
import {Avatar} from '@material-ui/core'
import {Rating} from '@material-ui/lab'
import Card from 'react-bootstrap/Card'
// import {LinkContainer} from 'react-router-bootstrap'
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


const Product = ({id,avatar,category,details,fineprint,image,name,originalprice,price,rating,seller}:ProductProps) => {
    return (
            <Card style={{width: '18rem'}} className='mx-3'>
                    <Link to={`/product/${id}`}>
                        <Card.Img src={image} alt={name} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Subtitle >{category}</Card.Subtitle>
                            <Card.Text>{name}</Card.Text>
                            <Card.Text>{seller}</Card.Text>
                            <Rating value={rating} precision={0.5} />
                            <Card.Text>{currencyFormatter.format(price,{locale:'en-US'})}</Card.Text>
                        </Card.Body>
                        <Avatar src={avatar}/>
                    </Link>
            </Card>
        
    )
}

export default Product


// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>