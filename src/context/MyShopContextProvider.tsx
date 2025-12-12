import React from 'react'
import MyShopContext from './MyShopContext'
import type { OrderInfoInterface, ValuesContextInterface } from '../interfaces/interfaces'
import { addOrder, addToCart, changeQuantityToProduct, cleanCart, deleteToCart, initialFetch } from '../store/myShopStore'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks/useAppSelector'

const MyShopContextProvider = ({children}: React.PropsWithChildren) => {
  const [productIdDelete, setProductIdDelete] = React.useState<string>('')
  const [orderInfo, setOrderInfo] = React.useState<OrderInfoInterface>({} as OrderInfoInterface)
  const [totalOrder, setTotalOrder] = React.useState<number>(0)
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

  React.useEffect(() => {
    cartList.forEach(({ price, quantity }) => {
      const total = price * quantity
      setTotalOrder((value) => value += total)
    })
  }, [cartList])

  const addProductToCart = (id: string) => {
    dispatch(addToCart(id))
  }

  const changeQuantity = (id: string, type: string) => {
    dispatch(changeQuantityToProduct({id, type}))
  }

  const addNewOrder = () => {
    orderInfo.products = cartList
    orderInfo.id = Math.floor(Math.random() * 1000)
    orderInfo.total = totalOrder
    dispatch(addOrder(orderInfo))
    setOrderInfo({} as OrderInfoInterface)
    setTotalOrder(0)
    dispatch(cleanCart())
  }

  const valuesContext: ValuesContextInterface = {
    addProductToCart,
    setProductIdDelete,
    changeQuantity,
    setOrderInfo,
    orderInfo,
    addNewOrder,
    totalOrder,
    setTotalOrder
  }

  return (
    <MyShopContext.Provider value={valuesContext}>
      {children}
    </MyShopContext.Provider>
  )
}

export default MyShopContextProvider
