import Nav from '../components/Nav'
import { useAppSelector } from '../hooks/useAppSelector'

const CartPage = () => {
  const cartList = useAppSelector((state) => state.myShopStore.cart)
  
  return (
    <>
      <Nav />
    </>
  )
}

export default CartPage
