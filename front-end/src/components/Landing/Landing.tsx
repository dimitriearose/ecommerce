import React from "react";
import "./Landing.scss";
import products from "../../db/products";
import Product from "../Product/Product";
import { Carousel } from "react-bootstrap";

const Landing = () => {
  return (
    <div
      className='container__container'
      style={{ maxWidth: "1366px", margin: "auto" }}>
      <div className='container-xxl'>
        <Carousel
          className='mb-4'
          style={{ maxHeight: "600px", overflow: "none" }}>
          <Carousel.Item style={{ maxHeight: "600px" }}>
            <div
              className='cover'
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.5)",
              }}></div>
            <img
              className='d-block w-100'
              style={{ maxHeight: "600px", objectFit: "cover" }}
              src='https://images.unsplash.com/photo-1600195077909-46e573870d99?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              alt='Deals'
            />

            <Carousel.Caption>
              <h3>Deals</h3>
              <p>Shop New Deals on Premium Courses at Coursify.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ maxHeight: "600px" }}>
            <div
              className='cover'
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.5)",
              }}></div>
            <img
              className='d-block w-100'
              style={{ maxHeight: "600px", objectFit: "cover" }}
              src='https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'
              alt='Deals'
            />

            <Carousel.Caption>
              <h3>Learn</h3>
              <p>Learn more everyday with Coursify.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item style={{ maxHeight: "600px" }}>
            <div
              className='cover'
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "rgba(0,0,0,.5)",
              }}></div>
            <img
              className='d-block w-100'
              style={{ maxHeight: "600px", objectFit: "cover" }}
              src='https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
              alt='Shopping'
            />
            <Carousel.Caption>
              <h3>Open 24/7</h3>
              <p>Coursify is open all the time 24/7.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='landing'>
          {products.map((product) => {
            return (
              <Product
                id={product._id}
                key={product._id}
                name={product.name}
                category={product.category}
                price={product.price}
                originalprice={product.originalprice}
                rating={product.rating}
                seller={product.seller}
                image={product.courseimg}
                avatar={product.avatar}
                details={product.details}
                fineprint={product.fineprint}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Landing;
