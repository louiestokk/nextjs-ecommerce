'use client'

import React,{useEffect,useState} from 'react'
import commerce from '../lib/commerce'

const NavMenuItemCard = ({product}) => {
  const [fetchdProduct, setFetchdProduct] = useState({})

  const fetchProduct =async()=>{
    try {
      const resp = await commerce.products.retrieve(`${product?.product_id}`)
      setFetchdProduct(resp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
fetchProduct()
  },[])

  return (
    <div style={{marginLeft:'1rem',marginTop:'1rem'}}>

    <div style={{display:'flex',width:'100%'}}>
    <img src={product.image.url} alt={product.name} style={{width:'25%',height:'60px',borderRadius:'3px'}}/>
    <div style={{marginLeft:'0.75rem',lineHeight:'5px'}}>
    <p style={{fontSize:'0.7rem',color:'gray'}}>{fetchdProduct.categories?.[0]?.name}</p>
      <h4 className='text-sm product-name' style={{maxWidth:'200px'}}>{product.name}</h4>
      <p className='text-sm font-bold product-price' style={{fontSize:'0.8rem'}}>{product.price.formatted_with_symbol}</p>
    </div>

    </div>
       

    </div>
  )
}

export default NavMenuItemCard