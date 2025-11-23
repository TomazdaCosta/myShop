import React from 'react'
import MyShopContext from './MyShopContext'
import type { ValuesContextInterface } from '../interfaces/interfaces'
import { addToCart, changeQuantityToProduct, deleteToCart, initialFetch } from '../store/myShopStore'
import { useDispatch } from 'react-redux'

const MyShopContextProvider = ({children}: React.PropsWithChildren) => {
  const [productIdDelete, setProductIdDelete] = React.useState<string>('')
  const dispatch = useDispatch()

  async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()

    dispatch(initialFetch(data?.products))
  }

  React.useEffect(() => {
    fetchProducts()
  }, [])

  React.useEffect(() => {
    dispatch(deleteToCart(productIdDelete))
  }, [productIdDelete])

  const addProductToCart = (id: string) => {
    dispatch(addToCart(id))
  }

  const changeQuantity = (id: string, type: string) => {
    dispatch(changeQuantityToProduct({id, type}))
  }

  const valuesContext: ValuesContextInterface = {
    addProductToCart,
    setProductIdDelete,
    changeQuantity
  }

  return (
    <MyShopContext.Provider value={valuesContext}>
      {children}
    </MyShopContext.Provider>
  )
}

export default MyShopContextProvider
