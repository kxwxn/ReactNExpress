import React from "react";
import useCartStore from "../store/cartState";

const Cart = () => {
  const {
    cart,
    deleteAllItem,
    totalPrice,
    updateCartItemQuantity,
    deleteFromCart,
  } = useCartStore();

  const displayCart = cart.map((cartItem, cartIndex) => {
    const add = () => {
      updateCartItemQuantity(cartItem.id, cartItem.quantity + 1);
    };

    const subtract = () => {
      if (cartItem.quantity > 1) {
        updateCartItemQuantity(cartItem.id, cartItem.quantity - 1);
      }
    };

    return (
      <div key={cartIndex}>
        <p>No.{cartItem.id}</p>

        <p>
          <button onClick={subtract}>-</button>
          <input
            size={2}
            style={{ textAlign: "center" }}
            value={cartItem.quantity}
          />
          <button onClick={add}>+</button>
        </p>

        <p>price:{cartItem.price * cartItem.quantity}円</p>
        <button onClick={() => deleteFromCart(cartItem.id)}> REMOVE</button>
      </div>
    );
  });

  return (
    <div>
      {displayCart}
      <p>TOTAL PRICE : {totalPrice}円 </p>
      <button onClick={deleteAllItem}>delete all cartItem</button>
    </div>
  );
};

export default Cart;
