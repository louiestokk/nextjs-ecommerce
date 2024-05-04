'use client'

import React,{useState,useEffect} from 'react'
import commerce from '../lib/commerce'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavMenuItemCard from './NavMenuItemCard';

const CheckoutCartItems = () => {
    const [userCart, setUserCart] = useState([])
    const [showItems, setShowItems] = useState(false)
    const fetchCart = async()=>{
        try { 
          const cart = await commerce.cart.retrieve()
          setUserCart(cart)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(()=>{
    fetchCart()
      },[userCart])

  return (
    <div className={showItems?'kassa-items show-kassa-items':'kassa-items'}>

        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem',borderBottom:'0.5px solid lightgray'}}>
        <div>
        <p>Varukorg ({userCart?.total_items} produkter)</p>
            <p>{userCart?.subtotal?.formatted_with_symbol}</p>
        </div>
            <KeyboardArrowDownIcon style={{fontSize:'1.8rem',cursor:'pointer'}} onClick={()=> setShowItems(!showItems)}/>
        </div>

        <div style={{width:'100%', overflowY:'scroll'}}>
  {userCart?.line_items?.map((el)=>(
       <NavMenuItemCard key={el.id} product={el}/>
       ))}
     </div>

    </div>
  )
}

export default CheckoutCartItems