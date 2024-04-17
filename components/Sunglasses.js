'use client'

import React from 'react'
import { useSelector } from 'react-redux'

const Sunglasses = () => {
    const {payload} = useSelector((state)=> state.products.productsArray)
   
  return (
    <div>Sunglasses</div>
  )
}

export default Sunglasses