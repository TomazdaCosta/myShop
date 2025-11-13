import Nav from '../components/Nav'
import ProductCard from '../components/ProductCard'
import { useAppSelector } from '../hooks/useAppSelector'

const InitialPage = () => {
  const productList = useAppSelector((state) => state.myShopStore.products)

  return (
    <>
      <Nav />
      {productList?.map(({ id, title, price, images, description }) => {
        return (
          <div key={id}>
            <ProductCard id={id} title={title} price={price} images={images} description={description} />
          </div>
        )
      })}
    </>
  )
}

export default InitialPage
