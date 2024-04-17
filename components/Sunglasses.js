'use client'

import React from 'react'
import { useSelector } from 'react-redux'

const Sunglasses = () => {
    const {payload} = useSelector((state)=> state.products.productsArray)
    console.log(payload)
  return (
    <div>Sunglasses</div>
  )
}

export default Sunglasses