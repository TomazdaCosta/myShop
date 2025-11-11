import React from 'react'
import MyShopContext from '../context/MyShopContext'

const InitialPage = () => {
  const { productList } = React.useContext(MyShopContext)

  return (
    <>
      <h1>Initial page</h1>
      {productList?.map((product) => {
        return (
          <div key={product.id}>
            {product.title}
          </div>
        )
      })}
    </>
  )
}

export default InitialPage
