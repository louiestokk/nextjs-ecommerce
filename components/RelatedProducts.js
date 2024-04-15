'useClient'

import React from 'react'
import Products from './Products'
import { useSelector } from 'react-redux'
const RelatedProducts = ({product}) => {

  return (
    <div style={{marginTop:'3rem'}}>
 <Products products={product?.related_products} title='Relaterade Produkter ' /> 
    </div>
   
  )
}

export default RelatedProducts