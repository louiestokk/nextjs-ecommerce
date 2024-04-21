import React from 'react'

const CategoryPageDealBanner = ({url,alt}) => {
  return (
    <div style={{marginTop:'1rem',display:'flex',justifyContent:'center',margin:'1rem 0.35rem'}}>
    <img src={url} alt={alt}/>
  </div>
  )
}

export default CategoryPageDealBanner