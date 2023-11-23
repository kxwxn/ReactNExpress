import React from 'react'
import useCartStore from '../store/cartState'

const Cart = () => {

  const { cart } = useCartStore();


  const displayCart = cart.map((item, index) => (
    <div>
      <p>price:{item.price}</p>
      <p>No.{item.id}</p>
      <p>qunatity:{item.quantity}</p>
      {/* <p>index:{index}</p> */}
    </div>
  ))

  return (
    <div>
      {displayCart}
    </div>
  )
}

export default Cart