import commerce from '../../../lib/commerce'

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
console.log(productDetails.product.name)

    return <section>
        <div className='product_item'>
            <img src={productDetails.product.image.url} alt={productDetails.product.name} style={{maxHeight:'200px'}}/>
            <h1>{productDetails.product.name}</h1>
        </div>
    </section>
}