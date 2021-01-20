import React from 'react'
import './Landing.scss'
import products from '../../db/products'
import Product from '../Product/Product'
import {Carousel,Container} from 'react-bootstrap'

function Landing() {
    return (
        
        <div className="container__container" style={{maxWidth:'1366px',margin:'auto'}}>
        <div className='container-xxl' >
            <Carousel className='mb-4' style={{maxHeight:'600px', overflow:'none'}} >
                    <Carousel.Item style={{maxHeight:'600px'}} >
                    <img
                        className="d-block w-100"
                        style={{maxHeight:'600px'}}
                        src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1389&q=80"
                        alt="Deals"
                    />
        
                    <Carousel.Caption>
                        <h3>Deals</h3>
                        <p>Shop New Deals on Premium Courses at Coursify.</p>
                    </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item style={{maxHeight:'600px'}}>
                    <img
                        className="d-block w-100"
                        style={{maxHeight:'600px'}}
                        src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="Shopping"
                    />
                    <Carousel.Caption>
                        <h3>Shop here</h3>
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