import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div>
        <div>
          <Link to='/'>MYSHOP</Link>
        </div>

        <div>
          <Link to='/cart'>CART</Link>
          <Link to='/orders'>ORDERS</Link>
        </div>
      </div>  
    </>
  )
}

export default Nav
