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
console.log(productDetails.product.id)

    return <h1>product details</h1>
}