'use client'

import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { isLoading,stopLoading } from '@redux/features/loading/loadingSlice'
import { addProducts } from '@redux/features/products/productsSlise'
import Hero from "@components/Hero"
import Popular from '@components/Popular'
import NewCollection from '@components/NewCollection'
import UtvaldaKategorier from '@components/UtvaldaKategorier'
import NewProducts from '@components/NewProducts'
import TopSeller from '@components/TopSeller'
import Sunglasses from '@components/Sunglasses'

const Home = () => {
  const [categories, setCategories] = useState([])

const dispatch = useDispatch()
  const fetchProducts = async()=>{
    try {
      dispatch(isLoading())
      const resp = await fetch('/api/products')
      const data = await resp.json()
      dispatch(addProducts(data.products))
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
     <NewProducts />
    <Popular />
    <TopSeller/>
    <NewCollection />
    <Sunglasses />
    <UtvaldaKategorier categories={categories}/>
    </section>
  )
}

export default Home