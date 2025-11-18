import type { ProductInterface } from '../interfaces/interfaces'

const CartCard = ({ id, title, price, images, description, quantity  }: ProductInterface) => {
  return (
    <>
      <div>
        <img src={images?.[0]} alt={description} style={{maxWidth: '10rem'}} />
      </div>

      <div id={id}>
        <h2>{title}</h2>
        <p>$ {price}</p>

        <div>
          <button>Delete</button>

          <div>
            <button>+</button>
            <span>{quantity}</span>
            <button>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartCard
