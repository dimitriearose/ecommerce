import React from 'react'
import './Landing.scss'
import products from '../../db/products'
import Product from '../Product/Product'
import {Carousel,Container} from 'react-bootstrap'

function Landing() {
    return (
        
        <div className='container-xxl container-fluid' >
            <Carousel className='mb-4'>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1114376/pexels-photo-1114376.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Deals"
                    />
                    <Carousel.Caption>
                        <h3>Deals</h3>
                        <p>Shop New Deals on Premium Courses at Coursify.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            <div className="landing">
                
                {products.map((product) => {
                    return <Product id={product._id} key={product._id} name={product.name} category={product.category} price={product.price} originalprice={product.originalprice} rating={product.rating} seller={product.seller} image={product.courseimg} avatar={product.avatar} details={product.details} fineprint={product.fineprint} />
                })}
            </div>
        </div>
        
    )
}

export default Landing


// <Carousel>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=First slide&bg=373940"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Second slide&bg=282c34"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>