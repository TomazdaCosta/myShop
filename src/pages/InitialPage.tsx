import React from 'react'
import MyShopContext from '../context/MyShopContext'

const InitialPage = () => {
  const { productList } = React.useContext(MyShopContext)

  return (
    <>
      <h1>Initial page</h1>
    </>
  )
}

export default InitialPage
