import React from 'react'
import MyShopContext from './MyShopContext'
import type { ProductInterface, ValuesContextInterface } from '../interfaces/interfaces'

const MyShopContextProvider = ({children}: React.PropsWithChildren) => {
  const [productList, setProductList] = React.useState<ProductInterface[]>()

  async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()

    setProductList(data?.products)
  }

  React.useEffect(() => {
    fetchProducts()
  }, [])

  const valuesContext: ValuesContextInterface = {
    productList
  }

  return (
    <MyShopContext.Provider value={valuesContext}>
      {children}
    </MyShopContext.Provider>
  )
}

export default MyShopContextProvider
