import type store from "../store/myShopStoreConfig"

export interface ProductInterface {
  id: string,
  title: string,
  description: string,
  price: number,
  images: string[]
}

export interface ValuesContextInterface {
  addProductToCart: (id: string) => void
}

export interface InitialStateInterface {
  products: ProductInterface[]
  cart: ProductInterface[]
}

export type RootStateFunc = ReturnType<typeof store.getState>
