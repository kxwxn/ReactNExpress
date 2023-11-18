import React from 'react'
import styles from './Cart.module.css'
import useCartStore from '../store/cartState'

const Cart = () => {
  const { cart, subtractFromCart, deleteAll } = useCartStore();

  const sortById = (a, b) => a.id - b.id;

  const sortedCart = cart.slice().sort(sortById);

  //slice()에 인수가 없으면 전체 배열을 복사한다. 

  const countItems = (items, id) => items.filter(item => item.id === id).length;



  const cartList = sortedCart.map((item) => {

    const itemCount = countItems(cart, item.id);

    return (<div className={styles.container}>
      {/* <img src={item.uri} className={styles.img} /> */}
      <p>{item.id}</p>
      <p>{item.price}</p>
      <p>Count: {itemCount}</p>
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


//Cart 페이지에 들어온 상품이 id 순으로 정렬되야한다. 현재는 추가된 순서로 되어있다(default programming tempo)
//같은 상품이 몇번씩들어올때는 그 상품이 계속 그려지는게 아니라, count 형식으로 + 1 -  이런식으로 그린다. 
//total price 로 표시한다.