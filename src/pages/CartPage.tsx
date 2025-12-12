import { Link } from 'react-router-dom'
import CartCard from '../components/CartCard'
import Nav from '../components/Nav'
import { useAppSelector } from '../hooks/useAppSelector'
import React from 'react'
import MyShopContext from '../context/MyShopContext'

const CartPage = () => {
  const cartList = useAppSelector((state) => state.myShopStore.cart)
  const {totalOrder } = React.useContext(MyShopContext)
  
  return (
    <>
      <Nav />

      <div>
        {cartList?.map(({ id, title, price, images, description, quantity }) => {
          return (
            <div key={id}>
              <CartCard id={id} title={title} price={price} images={images} description={description} quantity={quantity} />
            </div>
          )
        })}

        <div>
          <span>Total: ${ totalOrder.toFixed(2) }</span>
        </div>
      </div>
      
      <div>
        <Link to='/finalize'>Finalize order</Link>
      </div>
    </>
  )
}

export default CartPage
