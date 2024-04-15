import React from 'react'

const NavMenuItemCard = ({product}) => {
  return (
    <div>
        <img src={product.image.url} alt={product.name}/>
    </div>
  )
}

export default NavMenuItemCard