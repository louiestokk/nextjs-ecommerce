import React from 'react'

const ProductDetailsDivider = () => {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',borderTop:'1px solid rgb(233, 231, 231)',borderBottom:'1px solid rgb(233, 231, 231)',marginTop:'1rem'}}>
        <p style={{padding:'1rem',fontSize:'0.8rem',fontWeight:'bold'}}>Snabb Leverans</p>
        <p style={{padding:'1rem',fontSize:'0.8rem',fontWeight:'bold'}}>Fri frakt från 499kr</p>
    </div>
  )
}

export default ProductDetailsDivider