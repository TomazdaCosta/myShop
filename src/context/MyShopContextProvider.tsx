import React from 'react'
import MyShopContext from './MyShopContext'
import type { OrderInfoInterface, ValuesContextInterface } from '../interfaces/interfaces'
import { addOrder, addToCart, changeQuantityToProduct, cleanCart, deleteToCart, initialFetch } from '../store/myShopStore'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/useAppSelector'

const MyShopContextProvider = ({children}: React.PropsWithChildren) => {
  const [productIdDelete, setProductIdDelete] = React.useState<string>('')
  const [orderInfo, setOrderInfo] = React.useState<OrderInfoInterface>({} as OrderInfoInterface)
  const dispatch = useDispatch()
  const cartList = useAppSelector((state) => state.myShopStore.cart)

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

  const addNewOrder = () => {
    orderInfo.products = cartList
    dispatch(addOrder(orderInfo))
    setOrderInfo({} as OrderInfoInterface)
    dispatch(cleanCart())
    console.log(orderInfo)
  }

  const valuesContext: ValuesContextInterface = {
    addProductToCart,
    setProductIdDelete,
    changeQuantity,
    setOrderInfo,
    addNewOrder
  }

  return (
    <MyShopContext.Provider value={valuesContext}>
      {children}
    </MyShopContext.Provider>
  )
}

export default MyShopContextProvider
