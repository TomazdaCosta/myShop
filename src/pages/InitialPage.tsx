import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { useAppSelector } from '../hooks/useAppSelector'

const InitialPage = () => {
  const productList = useAppSelector((state) => state.myShopStore.products)

  return (
    <>
      <Nav />
      {productList?.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard id={product.id} title={product.title} price={product.price} images={product.images} description={product.description} />
          </div>
        )
      })}
    </>
  )
}

export default InitialPage
