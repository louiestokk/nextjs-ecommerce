import commerce from '../../../lib/commerce'
import { FaStar } from "react-icons/fa6";

const getProductDetails = async(productId)=>{
    try {
        const product = await commerce.products.retrieve(productId)
       return  new Response(JSON.stringify({product}),{
        status:200
    })
    } catch (error) {
        return new Response('Failed to fetch productdetails',{status:500})
    }
}

export default async function ProductDetails({params}){

const product = await getProductDetails(`${params.id}`)
const productDetails = await product.json()
console.log(productDetails.product)

    return <section>
        <div className='product_item'>
            <img src={productDetails?.product?.image?.url} alt={productDetails?.product?.name} style={{maxHeight:'294px'}}/>
            <div className='product_item_details'>
            <p>{productDetails?.product?.categories?.[0]?.name}</p>
            <h1>{productDetails?.product?.name}</h1>
            <div className='stars-container'>
    <div className='stars-item'>
    <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/> 
    </div>
    <p>4.9</p>
    </div>
            </div>
        <p>description</p>
        </div>
    </section>
}