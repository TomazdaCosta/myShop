import { Link } from 'react-router-dom'
import CartCard from '../components/CartCard'
import Nav from '../components/Nav'
import { useAppSelector } from '../hooks/useAppSelector'

const CartPage = () => {
  const cartList = useAppSelector((state) => state.myShopStore.cart)
  
  return (
    <>
      <Nav />
      {cartList?.map(({ id, title, price, images, description, quantity }) => {
        return (
          <div key={id}>
            <CartCard id={id} title={title} price={price} images={images} description={description} quantity={quantity} />
          </div>
        )
      })}
      <div>
        <Link to='/finalize'>Finalize order</Link>
      </div>
    </>
  )
}

export default CartPage
