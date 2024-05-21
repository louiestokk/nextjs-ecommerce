'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { GiOstrich } from "react-icons/gi";
import {useState,useEffect} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { IoMdClose } from "react-icons/io";
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
import commerce from '../lib/commerce'
import { navMenuLinks } from '@utils/navlinks';
import NavMenuItemCard from './NavMenuItemCard';
import { useRouter } from 'next/navigation';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import {dispatchUserCart} from '../redux/features/cart/cartSlice'


const NavComp = () => {
  const  router = useRouter()
  const {data:session} = useSession()
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null)
  const [showRegUser, setshowRegUser] = useState(false)
  const [userCart, setUserCart] = useState(null)
  const [showCart, setShowCart] = useState(false)
const [showMenu, setShowMenu] = useState(false)

const dispatch = useDispatch()

  const fetchProviders = async()=>{
    try {
      const resp = await getProviders()
      setProviders(resp)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchCart = async()=>{
    try { 
      const cart = await commerce.cart.retrieve()
      setUserCart(cart)
      dispatch(dispatchUserCart(cart))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
fetchCart()
  },[userCart])



  const setProvidersFuncktion = async()=>{
    try {
      const resp = await getProviders()
      setProviders(resp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
setProvidersFuncktion()
  },[])
  
  return (
    <>
     <div className={`${showMenu? 'nav-menu-root show-nav-menu':'nav-menu-root'}`}>
    <div className='nav-menu' style={{display:'flex',justifyContent:'flex-end',padding:'1rem',cursor:'pointer'}} onClick={()=> setShowMenu(false)}>
      <IoMdClose style={{fontSize:'1.3rem'}}/>
    </div>
    {navMenuLinks.map((el,i)=>(
      <div key={i} className='nav-menu'>
      <div  key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer'}} onClick={()=>{
         router.push(`${el.path}`)
         setShowMenu(false)
      }}>
      <div style={{display:'flex',alignItems:'center'}}>
        {el.icon}
        {el.title==='Hårgrejer'&& <p>👩‍🦰</p>}
        <p style={{marginLeft:'0.5rem'}}>{el.title}</p>
      </div> 
        
        <ArrowForwardIosIcon style={{fontSize:'0.95rem'}}/>
      </div>
      </div>
     
    ))}
     
    </div>
     <div className={`${showCart ? "cart-menu show-cart" : "cart-menu"}`}>
     <div className='cart-title'>
     <h2>Varukorg</h2>
     <IconButton onClick={()=>setShowCart(false)}>
       <IoMdClose/>
     </IconButton>
     </div>

     <div style={{width:'100%', overflowY:'scroll'}}>
  {userCart?.line_items?.map((el)=>(
       <NavMenuItemCard key={el.id} product={el}/>
       ))}
     </div>

       <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1rem',flexDirection:'column'}}>
       <div style={{display:'flex',alignItems:'center',fontSize:'0.8rem',border:'0.5px solid lightgray',width:'100%',justifyContent:'space-evenly',padding:'0.2rem'}}>
       <p>Total Items: {userCart?.total_items}</p>
       <p style={{marginLeft:'0.25rem'}}>Unique Items: {userCart?.total_unique_items}</p>
       </div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',width:'100%',border:'0.5px solid lightgray',padding:'0.1rem'}}>
        <p>Subtotal</p>
        <p>{userCart?.subtotal?.formatted_with_symbol}</p>
       </div>
       <Button type='button' variant='contained' style={{background:'#FB6D48',width:'90%',marginTop:'0.5rem'}} onClick={()=>{
        router.push('/cart/checkout')
        setShowCart(false)
       }}>TILL KASSAN</Button>
       </div>
       <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly',marginTop:'0.75rem'}}>
        <Image src={'/assets/images/visa.jpg'} width={50} height={50} alt='visa kort'/>
        <Image src={'/assets/images/mastercard.jpg'} width={50} height={50} alt='visa kort'/>
        <Image src={'/assets/images/logo_paypal.jpg'} width={50} height={50} alt='visa kort'/>
       </div>
      </div>
         <nav style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'1rem',alignItems:'center'}}>
      <IconButton onClick={()=>setShowMenu(true)}>
      <FaBars />
     </IconButton>
      <div className='logo-container' onClick={()=> router.push('/')}>
      <h2 className='logo-text'>.struts</h2>
      <GiOstrich className='logo-icon'/>
      </div>

        <div style={{display:'flex',alignItems:'center'}}>
        <IconButton onClick={()=>setshowRegUser(true)}>
        <FaRegUser />
        </IconButton>
        <IconButton aria-label='cart' onClick={()=> setShowCart(true)}>
        <Badge badgeContent={userCart?.total_items} color='secondary'>
        <BsBag />
        </Badge>
        </IconButton>
        </div>  
    </nav>

    <div className={showRegUser? 'auth-login-containner show-auth':'auth-login-containner'}>
    <h2 style={{fontWeight:'bold',fontSize:'1.4rem',padding:'0.5rem'}}>Logga in</h2>
    <p style={{padding:'0.5rem',fontSize:'0.9rem',color:'#3B3B3B'}}>Logga in för att ta del av dina medlemserbjudanden, orderhistorik och information om ditt medlemsskap.</p>
    {showRegUser && providers && Object.values(providers).map((provider,i)=>(
          <Button  key={i} type='button' variant='contained' style={{background:'black',color:'white',width:'70%',margin:'0.5rem 0.5rem'}} onClick={signIn(provider.id)}>Login</Button>
         ))}

  {/* <Button variant='contained' style={{background:'gray',color:'white',width:'70%',marginLeft:'0.5rem'}} onClick={signOut}>Logout</Button> */}
  <Button variant='outlined' style={{border:'none',width:'70%',marginTop:'0.5rem',textDecoration:'underline'}}  onClick={()=>{}}>Bli medlem</Button>
</div>
    </>
 
  )
}

export default NavComp