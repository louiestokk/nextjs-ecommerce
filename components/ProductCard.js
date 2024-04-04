import React from 'react'
import Image from 'next/image'
const ProductCard = ({product}) => {
  console.log(product)
  return (
    <div className='product'>
    <Image src={`${product?.image?.url}`} alt={product} width={170} height={200}/>
    <p className='text-sm product-name'>{product?.name}</p>
     <p className='text-xs product-category'>{product.categories[0].name}</p>
     <p className='text-sm font-bold product-price'>{product.price.formatted_with_symbol}</p>
    </div>

  )
}

export default ProductCard