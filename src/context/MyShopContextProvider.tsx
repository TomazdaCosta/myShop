import React from 'react'
import MyShopContext from './MyShopContext'
import type { ValuesContextInterface } from '../interfaces/interfaces'
import { addToCart, initialFetch } from '../store/myShopStore'
import { useDispatch } from 'react-redux'

const MyShopContextProvider = ({children}: React.PropsWithChildren) => {
  const dispatch = useDispatch()

  async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()

    dispatch(initialFetch(data?.products))
  }

  React.useEffect(() => {
    fetchProducts()
  }, [])

  const addProductToCart = (id: string) => {
    dispatch(addToCart(id))
  }

  const valuesContext: ValuesContextInterface = {
    addProductToCart
  }

  return (
    <MyShopContext.Provider value={valuesContext}>
      {children}
    </MyShopContext.Provider>
  )
}

export default MyShopContextProvider
