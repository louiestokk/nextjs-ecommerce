'use client'

import React,{useState,useEffect} from 'react'
import Hero from "@components/Hero"
import Products from "@components/Products"
import Popular from '@components/Popular'
const Home = () => {
  const [allProducts, setAllProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchProducts = async()=>{
    try {
      setLoading(true)
      const resp = await fetch('/api/products')
      const data = await resp.json()
      setAllProducts(data.products)
      setLoading(false)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
fetchProducts()
  },[])
  return (
    <section className='home-root'>
     <Hero /> 
    <Products products={allProducts} title={'Nytt hos oss'} loading={loading}/>
    <Popular />
    <Products products={allProducts} title={'Toppsäljare'} loading={loading}/>
    </section>
  )
}

export default Home