'use client'

import React,{useEffect,useState} from 'react'
import commerce from '../lib/commerce'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

const NavMenuItemCard = ({product}) => {
  const [fetchdProduct, setFetchdProduct] = useState({})
  const [numberItems, setnumberItems] = useState(product?.quantity)
const [isRemoving, setIsRemoving] = useState(false)

  const handleNumItemsChange=()=>{}

  const handleDeleteProduct=async(productId)=>{
    try {
      setIsRemoving(true)
      const resp = await commerce.cart.remove(`${productId}`)
      setIsRemoving(false)
    } catch (error) {
      console.log(error)
    }
  }

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
    <img src={product.image.url} alt={product.name} style={{maxWidth:'25%',height:'60px',borderRadius:'3px'}}/>
    <div style={{marginLeft:'0.75rem',lineHeight:'3px'}}>
    <p style={{fontSize:'0.7rem',color:'gray'}}>{fetchdProduct.categories?.[0]?.name}</p>
      <h4 className='text-sm product-name' style={{maxWidth:'200px'}}>{product.name}</h4>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}> 

      <div style={{lineHeight:'0px'}}>
      <p className='text-sm font-bold product-price' style={{fontSize:'0.8rem'}}>{product.price.formatted_with_symbol}</p>
      <span className='rea-procent'>kr{Math.round(product.price.raw*1.3)}</span>
        <DeleteOutlineIcon style={{color:'gray',fontSize:'1rem',marginLeft:'0.2rem',cursor:'pointer'}} onClick={()=> handleDeleteProduct(product.id)}/>
      </div>
    
      <div style={{display:'flex',alignItems:'center',border:'1px solid lightgray',padding:'0.2rem'}}>
        <input type='number' defaultValue={numberItems} style={{width:'40px',fontSize:'0.8rem'}} onChange={handleNumItemsChange}/>
      </div>
      </div>

    </div>

    </div>
       

    </div>
  )
}

export default NavMenuItemCard