import type store from "../store/myShopStoreConfig"

export type RootStateFunc = ReturnType<typeof store.getState>

export interface ProductInterface {
  id: string,
  title: string,
  description: string,
  price: number,
  images: string[],
  quantity: number
}

export interface ValuesContextInterface {
  addProductToCart: (id: string) => void,
  setProductIdDelete: React.Dispatch<React.SetStateAction<string>>,
  changeQuantity: (id: string, type: string) => void,
  setOrderInfo: React.Dispatch<React.SetStateAction<OrderInfoInterface>>,
  orderInfo: OrderInfoInterface,
  addNewOrder: () => void,
  totalOrder: number,
  setTotalOrder: React.Dispatch<React.SetStateAction<number>>
}

export interface InitialStateInterface {
  products: ProductInterface[]
  cart: ProductInterface[],
  order: OrderInfoInterface[]
}

export interface OrderInfoInterface {
  products: ProductInterface[],
  id: number,
  name: string,
  email: string,
  road: string,
  neighborhood: string,
  number: string,
  city: string,
  state: string,
  payment: string,
  total: number
}

export interface OrderCardProps {
  order: OrderInfoInterface
}