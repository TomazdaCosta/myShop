import type store from "../store/myShopStoreConfig"

export interface ProductInterface {
  id?: string,
  title?: string,
  description?: string,
  price?: number,
  images?: string[]
}

export interface ValuesContextInterface {
  productList: ProductInterface[] | undefined
}

export type RootStateFunc = ReturnType<typeof store.getState>
