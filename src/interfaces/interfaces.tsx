import type store from "../store/myShopStoreConfig"

export type RootStateFunc = ReturnType<typeof store.getState>

export interface ProductInterface {
  id: string,
  title: string,
  description: string,
  price: number,
  images: string[],
  quantity?: number
}

export interface ValuesContextInterface {
  addProductToCart: (id: string) => void,
  setProductIdDelete: React.Dispatch<React.SetStateAction<string>>
}

export interface InitialStateInterface {
  products: ProductInterface[]
  cart: ProductInterface[]
}
