'use client'

import React,{useEffect,useState} from 'react'
import Link from 'next/link'

const CatPageCategoriesLinks = ({name}) => {
    const [categories, setCategories] = useState([])
  
    const fetchCategories =async()=>{
        try {
            const resp = await fetch('/api/products')
            const data = await resp.json()
            setCategories(data.categories)
        } catch (error) {
        console.log(error)
        }
    }
  
  useEffect(()=>{
    fetchCategories()
  },[])
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
    {categories?.filter((el)=> el?.name === name)?.[0]?.children?.map((el,i)=>(
        <Link key={i} href={`smycken/halsband/${el.slug}`} style={{color:'black',border:'1px #eee solid',padding:'0.5rem',fontSize:'0.8rem',fontWeight:'bold',marginRight:'0.5rem'}}>{el.name}</Link>
    ))}
 

    </div>
  )
}

export default CatPageCategoriesLinks