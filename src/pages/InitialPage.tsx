import { useAppSelector } from '../hooks/useAppSelector'

const InitialPage = () => {
  const productList = useAppSelector((state) => state.myShopStore.products)

  return (
    <>
      <h1>Initial page</h1>
      {productList?.map((product) => {
        return (
          <div key={product.id}>
            {product.title}
          </div>
        )
      })}
    </>
  )
}

export default InitialPage
