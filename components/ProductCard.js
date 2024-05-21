'use client'

import React,{useState} from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import commerce from '../lib/commerce'
import { useRouter } from 'next/navigation';
import {RotatingLines} from 'react-loader-spinner'
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

const ProductCard = ({product,width}) => {
  const router = useRouter()
const [addingToCart, setAddingToCart] = useState(false)
const [productAdded, setProductAdded] = useState(false)

const addProduct = async(productId)=>{
  setAddingToCart(true)
  const resp = await commerce.cart.add(productId,1).then((response) => console.log(response))
  setAddingToCart(false)
  setProductAdded(true)
}

const handleRouting = (e) =>{
  if(e.target.classList.contains('add-to-cart-icon'))return
  else
  router.push(`/product/${product?.id}`)
}

  return (
    <div className='product' onClick={handleRouting} style={{width:width}}>
    <div className='rea-bubble'>
      <p>30%</p>
    </div>
    <img src={`${product?.image?.url}`} alt={product?.name} className='product-img'/>
    <div>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <p className='text-sm font-bold product-price'>{product?.price?.formatted_with_symbol}</p>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    {addingToCart?   <div style={{marginTop:'0.5rem'}}>
    <RotatingLines
  height="25"
  width="25"
  color="#4fa94d"
  ariaLabel="rotating-lines-loading"
  wrapperStyle={{}}
  wrapperClass="" 
  visible={true}/>
      </div>:  productAdded?  <IconButton>
      <CheckCircleIcon style={{color:'rgb(0, 131, 138',fontSize:'1.5rem'}} className='add-to-cart-icon'/>
    </IconButton>: <IconButton onClick={()=>addProduct(product.id)}>
    <TbShoppingBagPlus style={{color:'rgb(0, 131, 138',fontSize:'1.5rem',cursor:'pointer'}}  className='add-to-cart-icon'/>
  </IconButton>}
    </div>
   
    </div>
    <span className='rea-procent'>kr{Math.round(product?.price?.raw*1.3)}</span>
    </div>
    <p className='text-sm product-name'>{product?.name}</p>
     <p className='text-xs product-category'>{product?.categories?.[0]?.name}</p>
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
     <p>4 sålda idag</p>
     </div>
     <div className='sold-today'>
      <BsTruck style={{color:'rgb(0, 131, 138)',marginTop:'0.2rem',fontSize:'1.1rem'}}/>
      <p style={{color:'rgb(0, 131, 138)',fontWeight:'bold'}}>1-2 dagar</p>
     </div>
    </div>

  )
}

export default ProductCard