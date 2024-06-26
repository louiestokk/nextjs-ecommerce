'use client'

import React,{useEffect,useState} from 'react'
import commerce from '../lib/commerce'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {RotatingLines} from 'react-loader-spinner'
import { useRouter } from 'next/navigation';

const NavMenuItemCard = ({product}) => {
  const [fetchdProduct, setFetchdProduct] = useState({})
  const [numberItems, setNumberItems] = useState(0)
const [isRemoving, setIsRemoving] = useState(false)
const router = useRouter()

const updateCartCommerce = async()=>{
  try {
    await commerce.cart.update(product?.id, { quantity: product?.quantity+1 })
    router.refresh()
  } catch (error) {
    console.log(error)
  }
}

const handleUpdateCartMinus =async()=>{
  try {
   await commerce.cart.update(product?.id, { quantity: product?.quantity-1 })
    router.refresh()
  } catch (error) {
    console.log(error)
  }
}


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
      <div style={{display:'flex',alignItems:'center'}}>
      <span className='rea-procent'>kr{Math.round(product.price.raw*1.3)}</span>
      {isRemoving?   <RotatingLines
  height="25"
  width="25"
  color="#D3D3D3"
  ariaLabel="rotating-lines-loading"
  visible={true}/>: <DeleteOutlineIcon style={{color:'gray',fontSize:'1rem',marginLeft:'0.2rem',cursor:'pointer'}} onClick={()=> handleDeleteProduct(product.id)}/>}
      </div>
     
       
      </div>
    
      <div style={{display:'flex',alignItems:'center',border:'1px solid lightgray',padding:'0.2rem'}}>
      <RemoveIcon style={{fontSize:'1rem',border:'1px solid lightgray',marginRight:'0.3rem',cursor:'pointer'}} onClick={handleUpdateCartMinus}/>
        <p  style={{width:'20px',fontSize:'0.8rem'}}>{product?.quantity}</p>
        <AddIcon style={{fontSize:'1rem',border:'1px solid lightgray',marginLeft:'0.3rem',cursor:'pointer'}} onClick={updateCartCommerce}/>
      </div>
      </div>

    </div>

    </div>
       

    </div>
  )
}

export default NavMenuItemCard