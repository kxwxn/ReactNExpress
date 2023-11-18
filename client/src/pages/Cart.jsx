import React from 'react'
import styles from './Cart.module.css'
import useCartStore from '../store/cartState'

const Cart = () => {
  const { cart, subtractFromCart, deleteAll } = useCartStore();

  const cartList = cart.map((item) => {
    return (<div className={styles.container}>
      {/* <img src={item.uri} className={styles.img} /> */}
      <p>{item.id}</p>
      <p>{item.price}</p>
      <button onClick={() => subtractFromCart(item.id)}>delete from cart</button>
    </div>)
  })

  return (
    <div className=''>
      {cartList}
      <p>total price</p>
      <button onClick={deleteAll}>delete all items</button>
    </div>
  )
}

export default Cart


// Photograph에서 ADD 버튼을 누른 아이템들을 Cart 페이지에서 보여준다.
// Cart 페이지에서는 ADD 버튼을 누른 아이템들을 삭제할 수 있다.
// 그 아이템들은 map을 사용하여 보여준다.
// map으로 그리는 아이템들은 데이터가 상태관리를 통해 전달된다.
// Cart 페이지에서는 아이템들의 가격을 합산하여 보여준다.
// Cart 페이지에서는 결제하기 버튼을 누를 수 있다.