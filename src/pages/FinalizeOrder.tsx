import React from 'react'
import { Link } from 'react-router-dom'


const FinalizeOrder = () => {
  return (
    <>
      <Link to='/cart'>Back</Link>

      <form>
        <h2>Your information</h2>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required/>

        <h2>Address information</h2>
        <label htmlFor="road">Road</label>
        <input type="text" name="road" id="road" required/>
        <label htmlFor="neighborhood">Neighborhood</label>
        <input type="text" name="neighborhood" id="neighborhood" required/>
        <label htmlFor="number">Number</label>
        <input type="text" name="number" id="number" required/>
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" required/>
        <label htmlFor="state">State</label>
        <input type="text" name="state" id="state" required/>
        
        <h2>Payment information</h2>
        <input type="radio" name="payment" id="cash" required/>
        <label htmlFor="cash">Cash</label>
        <input type="radio" name="payment" id="debit" required/>
        <label htmlFor="debit">Debit card</label>
        <input type="radio" name="payment" id="credit" required/>
        <label htmlFor="credit">Credit card</label>

        <button>Finalize</button>
      </form>
    </>
  )
}

export default FinalizeOrder
