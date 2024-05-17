import commerce from '../../../lib/commerce'

export const GET = async()=>{
    try {
        const cart = await commerce.cart.retrieve()
        return new Response(JSON.stringify({cart}),{
            status:200
        })
    } catch (error) {
        return new Response('Failed to fetch cart',{status:500})
    }
}