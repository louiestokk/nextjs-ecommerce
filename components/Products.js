import ProductCard from './ProductCard'

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
  return (
    <div>
         <h2 style={{fontWeight:'bold',fontSize:'2rem'}} className='populara-produkter'>{title} </h2>
      <ProductCardList data={products}/>
    </div>
  )
}

export default Products


