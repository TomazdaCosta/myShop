import React from 'react'
import type { ProductInterface } from '../interfaces/interfaces'
import MyShopContext from '../context/MyShopContext'

const CartCard = ({ id, title, price, images, description, quantity  }: ProductInterface) => {
  const { setProductIdDelete, changeQuantity } = React.useContext(MyShopContext)

  return (
    <>
      <div>
        <img src={images?.[0]} alt={description} style={{maxWidth: '10rem'}} />
      </div>

      <div id={id}>
        <h2>{title}</h2>
        <p>$ {price}</p>

        <div>
          <button onClick={() => setProductIdDelete(id)}>Delete</button>

          <div>
            <button onClick={() => changeQuantity(id, 'sub')}>-</button>
            <span>{quantity}</span>
            <button onClick={() => changeQuantity(id, 'add')}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartCard
