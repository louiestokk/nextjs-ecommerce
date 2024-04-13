'use client'

import React,{useState,useEffect} from 'react';
import commerce from '../../../lib/commerce'
import { FaStar } from "react-icons/fa6";


export default function ProductDetails({params}){
const [itemIndex, setItemIndex] = useState(0)
const [currentProduct, setCurrentProduct] = useState({})
const fetchProductDetails =async(productId)=>{
    try {
        const product = await commerce.products.retrieve(productId)
        setCurrentProduct(product)
        console.log(product.assets)
    } catch (error) {
        console.log(error)
    }
}
useEffect(()=>{
fetchProductDetails(params.id)
},[])
    return <section>
   
        <div className='product_item'>
            <img src={currentProduct?.assets?.[itemIndex]?.url} alt={currentProduct?.name} style={{maxHeight:'294px'}}/>
            <div className='product_item_options'>
            <div style={{display:'flex',alignItems:'center'}}>
            <h2 style={{fontSize:'0.75rem'}}>{currentProduct?.variant_groups?.[0]?.name}:</h2>
            <h2 style={{marginLeft:'0.2rem',fontSize:'0.75rem',fontWeight:'bold'}} >{currentProduct?.variant_groups?.[0]?.options?.[itemIndex]?.name}</h2>
            </div>
           
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {currentProduct.assets.map((el,i)=>(
                <div key={el.id} onClick={()=> setItemIndex(i)} style={{cursor:'pointer'}}>                
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
        <span className='rea-procent' style={{marginTop:'0.6rem',marginLeft:'0.3rem'}}>kr{Math.round(currentProduct?.price?.raw*1.3)}</span>
        </div>
    
    </section>
}