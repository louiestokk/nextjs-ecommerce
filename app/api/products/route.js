import commerce from '../../../lib/commerce'

export const GET = async()=>{
    try {
        const merchant = await commerce.merchants.about();
        const { data: categories } = await commerce.categories.list();
        const { data: products } = await commerce.products.list();
        return new Response(JSON.stringify({categories,products,merchant}),{
            status:200
        })
    } catch (error) {
        return new Response('Failed to fetch merchant',{status:500})
    }
}