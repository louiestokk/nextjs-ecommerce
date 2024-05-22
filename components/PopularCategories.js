import React from 'react'
import Link from 'next/link'
const items = [
    {
        text:'HALSBAND',
        image:'https://www.svgrepo.com/show/488299/necklace.svg',
        path:'/smycken/halsband'
    },
    {
        text:'SOLGLASÖGON',
        image:'https://www.svgrepo.com/show/482490/sunglasses-2.svg',
        path:'/solglasogon'
    },
    {
        text:'HÅRTILLBEHÖR',
        image:'https://www.svgrepo.com/show/482634/hair-salon-1.svg',
        path:'/har'
    },
    {
        text:'RINGAR',
        image:'https://www.svgrepo.com/show/481964/ring-4.svg',
        path:'/smycken/ringar'
    },
    {
        text:'ÖRHÄNGEN',
        image:'https://www.svgrepo.com/show/193328/earring.svg',
        path:'/smycken/orhangen'
    },
    {
        text:'ARMBAND',
        image:'https://www.svgrepo.com/show/133994/bracelet.svg',
        path:'/smycken/armband'
    }
]

const PopularCategories = () => {
  return (
    <div style={{textAlign:'center',width:'100%',marginBottom:'2.8rem',marginTop:'0.5rem'}}>
        <h2 className='populara-produkter' style={{fontWeight:'bold',fontSize:'1.6rem'}}>POPULÄRA KATEGORIER</h2>
        <div style={{display:'flex',alignItems:'center',overflowX:'scroll'}}>
            {items.map((el,i)=>(
                <Link key={i} href={el.path} style={{height:'95px',width:'calc(33.333% - 20px)',flex:'0 0 auto'}}>
                <div style={{height:'58px',width:'58px',borderRadius:'50%',border:'1px #cecece solid',background:'#f6f6f6',display:'inline-flex',alignItems:'center',justifyContent:'center',marginBottom:'10px'}}>
                <img loading='lazy' src={el.image} alt={el.text} style={{height:'25px',width:'25px'}}/>
                </div>
                    <p style={{fontSize:'11px',fontWeight:'700',textAlign:'center',color:'#000'}}>{el.text}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default PopularCategories