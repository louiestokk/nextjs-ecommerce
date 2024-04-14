'use client'

import React,{useState,useEffect} from 'react'
import Hero from "@components/Hero"
import Products from "@components/Products"
import Popular from '@components/Popular'
import NewCollection from '@components/NewCollection'
import UtvaldaKategorier from '@components/UtvaldaKategorier'
const Home = () => {
  const [allProducts, setAllProducts] = useState([])
  const [categories, setCategories] = useState([])

  const fetchProducts = async()=>{
    try {
      const resp = await fetch('/api/products')
      const data = await resp.json()
      setAllProducts(data.products)
      setCategories(data.categories)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
fetchProducts()
  },[])
  return (
    <section className='home-root'>
     <Hero /> 
    <Products products={allProducts} title={'Nytt hos oss'}/>
    <Popular />
    <Products products={allProducts} title={'Toppsäljare'} />
    <NewCollection />
    <UtvaldaKategorier categories={categories}/>
    </section>
  )
}

export default Home