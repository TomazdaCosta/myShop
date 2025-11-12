import React from 'react'
import type { ProductInterface } from '../interfaces/interfaces'
import MyShopContext from '../context/MyShopContext'

const ProductCard = ({ id, title, price, images, description  }: ProductInterface) => {
  const { addProductToCart } = React.useContext(MyShopContext)

  return (
    <div>
      <div>
        <img src={images?.[0]} alt={description} style={{maxWidth: '10rem'}} />
      </div>

      <div>
        <h2>{title}</h2>
        <p>$ {price}</p>

        <button onClick={() => addProductToCart(id)}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
