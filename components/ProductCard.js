'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { TbShoppingBagPlus } from "react-icons/tb";
import commerce from '../lib/commerce'
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
const randomNumber = Math.floor(Math.random()*5)

const addProduct = async(productId)=>{
  const resp = await commerce.cart.add(productId,1).then((response) => console.log(response))
  console.log(resp)
}

  return (
    <div className='product'>
    <div className='rea-bubble'>
      <p>30%</p>
    </div>
    <img src={`${product?.image?.url}`} alt={product.name} className='product-img'/>
    <div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <p className='text-sm font-bold product-price'>{product.price.formatted_with_symbol}</p>
    <TbShoppingBagPlus style={{color:'rgb(0, 131, 138',fontSize:'1.5rem',cursor:'pointer'}} onClick={()=>addProduct(product.id)}/>
    </div>
    <Link href={{
    pathname: `/product/[id]`,
    query: {
      item: 'test'
      
    },
  }}
  as={`/product/${product.id}`}>go to </Link>
    <span className='rea-procent'>kr{Math.round(product.price.raw*1.3)}</span>
    </div>
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
     <p>{randomNumber+1} sålda idag</p>
     </div>
     <div className='sold-today'>
      <BsTruck style={{color:'rgb(0, 131, 138)',marginTop:'0.2rem',fontSize:'1.1rem'}}/>
      <p style={{color:'rgb(0, 131, 138)',fontWeight:'bold'}}>1-2 dagar</p>
     </div>
    </div>

  )
}

export default ProductCard