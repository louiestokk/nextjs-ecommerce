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

    return <section>
        <div className='product_item'>
            <img src={productDetails?.product?.image?.url} alt={productDetails?.product?.name} style={{maxHeight:'294px'}}/>
            <div className='product_item_options'>
            <h2>{productDetails?.product?.variant_groups?.[0]?.name}</h2>
            <div style={{display:'flex',flexWrap:'wrap'}}>
            {productDetails.product.assets.map((el)=>(
                <img src={el.url} key={el.id} style={{width:'55px',width:'55px',margin:'0 0.2rem',objectFit:'cover'}}/>
            ))}
            </div>
            <div style={{display:'flex'}}>
            {productDetails?.product?.variant_groups?.[0]?.options?.map((el)=> el?.name)?.map((el,i)=>(
            <p key={i} style={{width:'55px',margin:'0 0.2rem',fontSize:'0.85rem'}}>{el}</p>
           ))}
            </div>
            </div>
            <div className='product_item_details'>
            <p className='text-xs text-center mt-4'>{productDetails?.product?.categories?.[0]?.name}</p>
            <h1 className='text-sm mt-1 font-bold text-center max-w-80'>{productDetails?.product?.name}</h1>
            <div className='stars-container mt-3 mb-1 justify-center'>
    <div className='stars-item'>
    <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/>  <FaStar className='stars'/> 
    </div>
    <p className='text-xs mx-1'>4.9</p>
    <div style={{background:'#eae5e5',padding:'0.2rem',borderRadius:'2px'}}>
        <p className='text-xs mx-1'>630 Recensioner</p>
    </div>
    </div>
            </div>
        <p dangerouslySetInnerHTML={{__html:productDetails?.product?.description}} className='text-xs text-center max-w-80 mb-2'></p>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
        <p className='text-sm font-bold product-price text-center'>{productDetails?.product?.price?.formatted_with_symbol}</p>
        <span className='rea-procent' style={{marginTop:'0.6rem',marginLeft:'0.3rem'}}>kr{Math.round(productDetails?.product?.price?.raw*1.3)}</span>
        </div>
    
    </section>
}