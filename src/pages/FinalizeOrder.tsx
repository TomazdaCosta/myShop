import React from 'react'
import { Link } from 'react-router-dom'
import MyShopContext from '../context/MyShopContext'


const FinalizeOrder = () => {
  const { setOrderInfo, addNewOrder, orderInfo } = React.useContext(MyShopContext)

  return (
    <>
      <Link to='/cart'>Back</Link>

      <form>
        <h2>Your information</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, name: e.target.value}))}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, email: e.target.value}))}
        />

        <h2>Address information</h2>
        <label htmlFor="road">Road</label>
        <input
          type="text"
          name="road"
          id="road"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, road: e.target.value}))}
        />
        <label htmlFor="neighborhood">Neighborhood</label>
        <input
          type="text"
          name="neighborhood"
          id="neighborhood"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, neighborhood: e.target.value}))}
        />
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          id="number"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, number: e.target.value}))}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, city: e.target.value}))}
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, state: e.target.value}))}
        />
        
        <h2>Payment information</h2>
        <input
          type="radio"
          name="payment"
          id="cash"
          value="Cash"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, payment: e.target.value}))}
        />
        <label htmlFor="cash">Cash</label>
        <input
          type="radio"
          name="payment"
          id="debit"
          value="Debit card"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, payment: e.target.value}))}
        />
        <label htmlFor="debit">Debit card</label>
        <input
          type="radio"
          name="payment"
          id="credit"
          value="Credit card"
          required
          onChange={(e) => setOrderInfo((current) => ({...current, payment: e.target.value}))}
        />
        <label htmlFor="credit">Credit card</label>
      </form>

      {orderInfo.city && orderInfo.email && orderInfo.name && orderInfo.neighborhood && orderInfo.number && orderInfo.payment && orderInfo.road && orderInfo.state && <button onClick={() => addNewOrder()}><Link to='/orders'>Finalize</Link></button>}
      
    </>
  )
}

export default FinalizeOrder
