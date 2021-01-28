import React from "react"
import { Link } from "react-router-dom"
import { Avatar } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import Card from "react-bootstrap/Card"
import currencyFormatter from "currency-formatter"
import "./Product.scss"

interface ProductProps {
  id: string
  name: string
  category: string
  price: number
  originalprice: number
  rating: number
  creator: string
  image: string
  avatar: string
  details: string
  fineprint: string
}

const Product = ({
  id,
  avatar,
  category,
  details,
  fineprint,
  image,
  name,
  originalprice,
  price,
  rating,
  creator,
}: ProductProps) => {
  return (
    <Card style={{ width: "18rem", maxHeight: "600px" }} className='mx-3 mb-4'>
      <Link to={`/product/${id}`}>
        <Card.Img src={image} alt={name} />
        <Card.Body>
          <Card.Title className='mb-3.ch'>{name}</Card.Title>
          <Card.Subtitle className='mb-2'>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Card.Subtitle>
          <Card.Text>{creator}</Card.Text>
          <Rating value={rating} precision={0.5} readOnly />
          <Card.Text style={{ fontFamily: "Roboto" }}>
            {currencyFormatter.format(price, { locale: "en-US" })}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default Product
