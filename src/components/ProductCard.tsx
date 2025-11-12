import type { ProductInterface } from '../interfaces/interfaces'

const ProductCard = ({ title, price, images, description  }: ProductInterface) => {
  return (
    <div>
      <div>
        <img src={images?.[0]} alt={description} style={{maxWidth: '10rem'}} />
      </div>

      <div>
        <h2>{title}</h2>
        <p>$ {price}</p>

        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
