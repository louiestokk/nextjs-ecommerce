'use client'

import React,{useState,useEffect} from 'react';
import commerce from '../../../lib/commerce'
import { FaStar } from "react-icons/fa6";
import { BsTruck } from "react-icons/bs";
import { Oval } from 'react-loader-spinner'
import { FaCheck } from "react-icons/fa6";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import {Button}from '@mui/material'
import RelatedProducts from '@components/RelatedProducts';
import ProductDetailsDivider from '@components/ProductDetailsDivider';
import ProductDetailsAccordion from '@components/ProductDetailsAccordion';
export default function ProductDetails({params}){
const [itemIndex, setItemIndex] = useState(0)
const [currentProduct, setCurrentProduct] = useState({})
const [loading, setLoading] = useState(false)
const [numItems, setNumItems] = useState(1)
const [addingToCart, setaddingToCart] = useState(false)
const [addedToCart, setaddedToCart] = useState(false)

const handleAddToCart =async(e)=>{
    if(e.target.parentElement.childNodes[0]?.value===''){
        alert('Du måste lägga till minst 1 artikel för att kunna lägga till i varukorgen!')
        return
    } else {
        try {
            setaddingToCart(true)
            const resp = await commerce.cart.add(`${params.id}`, numItems)
            setaddingToCart(false)
            setaddedToCart(true)
            setTimeout(()=>{
        setaddedToCart(false)
            },2000)
        } catch (error) {
            console.log(error)
        }
        
    }
    
}

const fetchProductDetails =async(productId)=>{
    try {
        setLoading(true)
        const product = await commerce.products.retrieve(productId)
        setCurrentProduct(product)
     setLoading(false)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
fetchProductDetails(params.id)
},[])
    return <section>
   {loading &&<div style={{display:'flex',justifyContent:'center'}}>
    <Oval
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
/>
   </div> }
        <div className='product_item'>
            <img src={currentProduct?.assets?.[itemIndex]?.url} alt={currentProduct?.name} style={{maxHeight:'294px'}}/>
            <div className='product_item_options'>
            <div style={{display:'flex',alignItems:'center'}}>
            <h2 style={{fontSize:'0.75rem'}}>{currentProduct?.variant_groups?.[0]?.name}:</h2>
            <h2 style={{marginLeft:'0.2rem',fontSize:'0.75rem',fontWeight:'bold'}} >{currentProduct?.variant_groups?.[0]?.options?.[itemIndex]?.name}</h2>
            </div>
           
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {currentProduct?.assets?.map((el,i)=>(
                <div key={el.id} onClick={()=> setItemIndex(i)} style={{cursor:'pointer', border: i===itemIndex && '1px solid black'}}>                
                <img src={el.url}  style={{width:'55px',width:'55px',margin:'0 0.2rem',objectFit:'cover'}}/>
                </div>
        
            ))}
            </div>
            </div>
            <div className='product_item_details'>
            <p className='text-xs text-center mt-4'>{currentProduct?.categories?.[0]?.name}</p>
            <h1 className='text-sm mt-1 font-bold text-center max-w-80'>{currentProduct?.name}</h1>
            <div className='stars-container mt-3 mb-1 justify-center'>
    <div className='stars-item'>
    <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/> 
    </div>
    <p className='text-xs mx-1'>4.9</p>
    <div style={{background:'#eae5e5',padding:'0.2rem',borderRadius:'2px'}}>
        <p className='text-xs mx-1'>630 Recensioner</p>
    </div>
    </div>
            </div>
        <p dangerouslySetInnerHTML={{__html:currentProduct?.description}} className='text-xs text-center max-w-80 mb-2'></p>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
        <p className='text-sm font-bold product-price text-center'>{currentProduct?.price?.formatted_with_symbol}</p>
        {!loading &&         <span className='rea-procent' style={{marginTop:'0.6rem',marginLeft:'0.3rem'}}>kr{Math.round(currentProduct?.price?.raw*1.3)}</span>}
        </div>
{/*  */}
    <div className='add-tocart flex justify-center mt-6 w-full'>
    <div className='numItemsInput' >
    <input type='text' value={numItems}/>
    <div className='numsinput-reglage'>
        <CiSquarePlus className='icon-numsinput'/>
        <CiSquareMinus className='icon-numsinput'/>
    </div>
    </div>
   

   <Button type='button' variant='contained' style={{background:'#FB6D48',width:'80%'}} onClick={handleAddToCart}>{addingToCart?'LÄGGER TILL...': addedToCart?'TILLAGT':'LÄGG I KUNDVAGN'}</Button>
    </div>
    {/*  */}
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div style={{display:'flex',alignItems:'center',border:'1px solid rgb(233, 231, 231)',padding:'0.5rem',width:'96.5%',marginTop:'1rem'}}>
        <FaCheck style={{color:'green',marginRight:'0.5rem'}}/>
            <p style={{fontSize:'0.85rem'}}>Finns i webblager</p>
        </div>
        <div style={{display:'flex',alignItems:'center',border:'1px solid rgb(233, 231, 231)',padding:'0.5rem',width:'96.5%'}}>
        <BsTruck style={{color:'green',marginRight:'0.5rem'}}/>
            <p style={{fontSize:'0.85rem'}}> Skickas imorgon</p>
        </div>
    </div>
    <RelatedProducts product={currentProduct}/>
    <ProductDetailsDivider />
    <ProductDetailsAccordion product={currentProduct}/>
    </section>
}