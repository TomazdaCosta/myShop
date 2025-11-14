import type store from "../store/myShopStoreConfig"

export type RootStateFunc = ReturnType<typeof store.getState>

export interface ProductInterface {
  id: string,
  title: string,
  description: string,
  price: number,
  images: string[]
}

export interface CartInterface extends ProductInterface {
  quantity: number
}

export interface ValuesContextInterface {
  addProductToCart: (id: string) => void
}

export interface InitialStateInterface {
  products: ProductInterface[]
  cart: CartInterface[]
}
