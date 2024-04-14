'use client'

import ProductCard from './ProductCard'
import {useSelector} from 'react-redux'
import { Oval } from 'react-loader-spinner'
const ProductCardList = ({data})=>{
    return <div className='products-container'>
        {data.map((product)=>(
            <ProductCard key={product.id}
                product={product}
            />
        ))}
    </div>
}

const Products = ({products,title}) => {
  const loadingg = useSelector((state)=> state.loading.isLoadingload)
  
  return (
    <div>
         <h2 style={{fontWeight:'bold',fontSize:'2.4rem'}} className='populara-produkter'>{title} </h2>
    
      {loadingg ?   <Oval
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
/>:  <ProductCardList data={products} />}
    </div>
  )
}

export default Products


