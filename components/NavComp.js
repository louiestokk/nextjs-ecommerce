'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { GiOstrich } from "react-icons/gi";
import {useState,useEffect} from 'react'
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { IoMdClose } from "react-icons/io";
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'
import commerce from '../lib/commerce'
const NavComp = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null)
  const [toggleDropDown, setToggleDropDown] = useState(false)
  const [userCart, setUserCart] = useState(null)
  const [showCart, setShowCart] = useState(false)

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
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
fetchCart()
  },[userCart])
  return (
    <>
     <div className={`${showCart ? "cart-menu show-cart" : "cart-menu"}`}>
     <div className='cart-title'>
     <h2>Varukorg</h2>
     <IconButton onClick={()=>setShowCart(false)}>
       <IoMdClose/>
     </IconButton>
     </div>
       {userCart?.line_items?.map((el)=>(
        <div key={el.id}>
          <img src={el?.image?.url} alt={el.name} style={{width:'50px',height:'50px'}}/>
        </div>
       ))}
      </div>
         <nav style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'1rem',alignItems:'center'}}>
      <FaBars />
      <div className='logo-container'>
      <h2 className='logo-text'>.struts</h2>
      <GiOstrich className='logo-icon'/>
      </div>

        <div style={{display:'flex',alignItems:'center'}}>
        <FaRegUser />
        <IconButton aria-label='cart' onClick={()=> setShowCart(true)}>
        <Badge badgeContent={userCart?.total_items} color='secondary'>
        <BsBag style={{marginLeft:'0.75rem'}} />
        </Badge>
        </IconButton>
      
        </div>
{/*    
      <Link href='/' className='flex gap-2 flex-center'>
        <p className='logo_text'>Louie & co</p>
      </Link>
 
   <div className='flex relative'>
 
    {isUserLoggedIn ? <div className='flex'>
    <Image 
              src={'/assets/images/logo.svg'}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={()=> setToggleDropDown((prev)=>(
                !prev
              ))}
            />
            {toggleDropDown&&  <div className='dropdown'>
              <Link href='/account' className='dropdown_link' onClick={()=> setToggleDropDown(false)}>My Account</Link>
              <Link href='/add-product' className='dropdown_link' onClick={()=> setToggleDropDown(false)}>Add Product</Link>
              <button type='button' className='mt-5 w-full black_btn' onClick={()=>{
                setToggleDropDown(false)
                signOut()
              }}>Sign Out</button>
            </div>}
          
    </div>:     <>
    {providers && Object.values(providers).map((provider=>(
      <button type='button' key={provider.name} onClick={()=> signIn(provider.id)} className='black_btn'>
        Sign In
      </button>
    ))) }
        </>}
   </div>
  
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? <div className='flex gap-3 md:gap-5'>
          <Link href={'/add-product'} className='black_btn'>Add Product</Link>
          <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
          <Link href='/profile'>
            <Image 
              src={'/assets/images/logo.svg'}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
            />
          </Link>
        </div>:
        <>
    {providers && Object.values(providers).map((provider=>(
      <button type='button' key={provider.name} onClick={()=> signIn(provider.id)} className='black_btn'>
        Sign In
      </button>
    ))) }
        </>
        }
      </div> */}
    </nav>
    </>
 
  )
}

export default NavComp