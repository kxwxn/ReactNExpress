import React from 'react'
import styles from './Cart.module.css'
import useCartStore from '../store/cartState'

const Cart = () => {
  const { cart, subtractFromCart, deleteAll, increaseQuantity, decreaseQuantity } = useCartStore();

  const sortById = (a, b) => a.id - b.id;

  const sortedCart = cart.slice().sort(sortById);

  //slice()에 인수가 없으면 전체 배열을 복사한다. 

  const countItems = (i, id) => i.filter(item => item.id === id).length;

  const totalPrice = sortedCart.reduce((total, item) => {
    const quantity = item.quantity || 0; // item.quantity가 정의되어 있지 않으면 0으로 설정
    return total + item.price * quantity;
  }, 0);


  const cartList = sortedCart.map((item) => {

    return (<div className={styles.container}>
      {/* <img src={item.uri} className={styles.img} /> */}
      <p>{item.id}</p>
      <p>{item.price}</p>
      <button onClick={() => decreaseQuantity(item.id)}>-</button>
      <input value={item.quantity} size='2' style={{ textAlign: "center" }} />
      <button onClick={() => increaseQuantity(item.id)}>+</button>
      <p><button onClick={() => subtractFromCart(item.id)}>delete from cart</button></p>
    </div>)
  })

  return (
    <div className=''>
      {cartList}
      <p>TOTAL PRICE : {totalPrice}</p>
      <button onClick={deleteAll}>delete all items</button>
    </div>
  )
}

export default Cart


//Cart 페이지에 들어온 상품이 id 순으로 정렬되야한다. 현재는 추가된 순서로 되어있다(default programming tempo) - DONE.
//같은 상품이 몇번씩들어올때는 그 상품이 계속 그려지는게 아니라, count 형식으로 - 1 +  이런식으로 그린다. 
//total price 로 표시한다.