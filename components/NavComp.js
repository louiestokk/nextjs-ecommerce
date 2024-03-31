'use client'

import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import {useState,useEffect} from 'react'
import {signIn,signOut,useSession,getProviders} from 'next-auth/react'

const NavComp = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null)
const [toggleDropDown, setToggleDropDown] = useState(false)
  const fetchProviders = async()=>{
    try {
      const resp = await getProviders()
      setProviders(resp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
fetchProviders()
  },[])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <FaBars />
<h2>Louie & co</h2>
        <div className='flex-between space-x-5'>
        <FaRegUser />
        <BsBag />
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
  )
}

export default NavComp