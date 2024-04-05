import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
const productReviws = [
  {
    stars:5,
    comment:'Jättenöjd precis som på bild!',
    name:'Lisa',
    product:null,
  },
  {
    stars:3,
    comment:'Jättenöjd precis som på bild!',
    name:'Lisa',
    product:null,
  },
  {
    stars:3,
    comment:'Jättenöjd precis som på bild!',
    name:'Lisa',
    product:null,
  }
]

const ProductCard = ({product}) => {
  console.log(product)
  return (
    <div className='product'>
    <img src={`${product?.image?.url}`} alt={product.name} className='product-img'/>
    <p className='text-sm font-bold product-price'>{product.price.formatted_with_symbol}</p>
    <p className='text-sm product-name'>{product?.name}</p>
     <p className='text-xs product-category'>{product.categories[0].name}</p>
     <div className='reviews-container'>
    <div className='stars-container'>
    <div className='stars-item'>
    <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/> 
    </div>
    <p>4.9</p>
    </div>
     </div>
     <div className='sold-today'>
     <BsFire className='fire'/>
     <p>3 sålda idag</p>
     </div>
     <div className='sold-today'>
      <BsTruck style={{color:'rgb(0, 131, 138)',marginTop:'0.2rem',fontSize:'1.1rem'}}/>
      <p style={{color:'rgb(0, 131, 138)',fontWeight:'bold'}}>1-2 dagar</p>
     </div>
    </div>

  )
}

export default ProductCard