import React from 'react'

const UtvaldaKategorier = ({categories}) => {
  return (
    <>
 <h2 style={{fontWeight:'bold',fontSize:'2rem'}} className='populara-produkter'>Utvalda produkter av .struts </h2>
<div style={{justifyContent:'center',display:'flex',flexWrap:'wrap',margin:'2rem 0'}}>

{categories.map((el,i)=>(
    <button key={i} className='utvl-btn'>{el.name}</button>
))}
</div>
    </>
  
  )
}

export default UtvaldaKategorier