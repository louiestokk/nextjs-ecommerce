'use client'

import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { isLoading,stopLoading } from '@redux/features/loading/loadingSlice'
import { addProducts } from '@redux/features/products/productsSlise'
import Hero from "@components/Hero"
import Products from "@components/Products"
import Popular from '@components/Popular'
import NewCollection from '@components/NewCollection'
import UtvaldaKategorier from '@components/UtvaldaKategorier'
const Home = () => {
  const [allProducts, setAllProducts] = useState([])
  const [categories, setCategories] = useState([])

const dispatch = useDispatch()
  const fetchProducts = async()=>{
    try {
      dispatch(isLoading())
      const resp = await fetch('/api/products')
      const data = await resp.json()
      dispatch(addProducts(data.products))
      setAllProducts(data.products)
      setCategories(data.categories)
      dispatch(stopLoading())
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