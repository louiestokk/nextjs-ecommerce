import commerce from '../../../lib/commerce'

export const GET = async()=>{
    try {
        const {data} = await commerce.products.list({
            category_slug: ['SOLGLAS-GON'],
          })
          return new Response(JSON.stringify({data}),{
            status:200
        })
    } catch (error) {
        return new Response('Failed to fetch solglasogon',{status:500})
    }
}