import React from 'react'
import styles from "./blog.module.css"
import Card from '../components/Card'

const fetchProducts = async ()=>{
  const response = await fetch('https://dummyjson.com/products', {cache: 'no-store'});
  if(!response.ok){
    throw new Error('API Call Failed due to unknown reason');
  }
  return response.json();
}

const Blog = async () => {
  const productsData = await fetchProducts();
  //console.log(productsData);
  const products = productsData.products;
  return (
  <div className="container d-flex flex-column justify-content-center align-items-center">
    <h2 className={`${styles.textColor} my-4`}>Blog</h2>
    <div className="row">
      {
        products.map((product)=> 
        <div className="col-lg-4 mb-4" key={product.id}>
          <Card id={product.id} 
          title={product.title} price={product.price} 
          category={product.category} thumbnail={product.thumbnail}/>
        </div>
        )
      }
      
    </div>
  </div>
  )
}

export default Blog