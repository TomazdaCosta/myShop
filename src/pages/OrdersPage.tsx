import Nav from '../components/Nav'
import OrderCard from '../components/OrderCard'
import { useAppSelector } from '../hooks/useAppSelector'

const OrdersPage = () => {
  const orderList = useAppSelector((state) => state.myShopStore.order)

  return (
    <>
      <div>
        <Nav />
      </div>

      <div>
        <p>Your orders</p>

        <div>
          {orderList.map((order) => {
            return (
              <div key={order.id}>
                <OrderCard order={order} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default OrdersPage
