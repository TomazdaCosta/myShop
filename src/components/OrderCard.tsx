import React from 'react'
import type { OrderCardProps } from '../interfaces/interfaces'

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <>
      <div>
        <div>
          <h2>Order {order.id}</h2>

          <span>value</span>
        </div>

        <div>
          <button>see details</button>

          <div>
            {order.products.map((product) => {
              return (
                <div key={product.id}>
                  <div>
                    <img src={product.images[0]} alt={product.description} />
                    <p>{product.title}</p>
                  </div>

                  <div>
                    <p>{product.quantity} units</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderCard
