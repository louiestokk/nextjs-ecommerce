'use client'

import React,{useState,useEffect} from 'react'
import Hero from "@components/Hero"
import Products from "@components/Products"
import NewProducts from "@components/NewProducts"

const Home = () => {
  const [allProducts, setAllProducts] = useState([])
  const fetchProducts = async()=>{
    try {
      const resp = await fetch('/api/products')
      const data = await resp.json()
      setAllProducts(data.products)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
fetchProducts()
  },[])
  return (
    <section className='w-full flex-col'>
        <h1 className='head_text text-center'>
      Smyckes Butiken💍
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'>Trendigt & Billigt</span>
    </h1>
    {/* <p className='desc text-center'>
    Stort urval av armband, ringar💍, halsband, örhängen och andra accessoarer👑 
    </p> */}
    <Hero />
    <NewProducts />
    <Products products={allProducts} title={'Populära produkter'}/>
    </section>
  )
}

export default Home