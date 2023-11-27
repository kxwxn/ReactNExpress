import create from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      totalPrice: 0,
      addToCart: (dataFromBtn) =>
        set((state) => {
          const testIndex = state.cart.findIndex(
            (cartItem) => cartItem.id === dataFromBtn.id
          );

          let newCart = [...state.cart];

          if (testIndex >= 0) {
            newCart[testIndex].quantity += dataFromBtn.quantity;
          } else {
            newCart = [...newCart, dataFromBtn];
          }

          const sum = newCart.reduce((acc, cur) => {
            return acc + cur.price * cur.quantity;
          }, 0);

          return { cart: newCart.sort((a, b) => a.id - b.id), totalPrice: sum };
        }),

      deleteAllItem: () => set((state) => ({ cart: [], totalPrice: 0 })),

      updateCartItemQuantity: (id, quantity) =>
        set((state) => {
          const newCart = state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          );

          const totalPrice = newCart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );

          return { cart: newCart, totalPrice };
        }),
      deleteFromCart: (deleteItemIndex) =>
        set((state) => {
          const newCart = state.cart.filter(
            (item) => item.id !== deleteItemIndex
          );

          const totalPrice = newCart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          );

          return { cart: newCart, totalPrice };
        }),
    }),

    {
      name: "cart_storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useCartStore;

// 현재는 Photograph.jsx 에서 onClick={add} 로 수량 조절을 하고 addToCart(i)로 받은 데이터를 단순 cart배열에 추가하고있다.
// id 순으로 정렬 필요. -> array.sort((a,b)=>a.id-b.id)

// 만약에 addToCart가 실행됬는데, 그 객체가 이미 cart에 있다면 그 객체의 index를 찾아서 그것의 quantity속성만 변경.
// 없는 객체라면 추가한다.

// 전체합을 보여주는 totalPrice 함수 구현.

// Cart.jsx 에서 수량조절 삭제가 가능한 함수들 구현.(Cart.jsx에서도 가능할거같음)

// JavaScript에서 객체와 배열은 참조에 의해 할당 -> 불변성원칙, 자바스크립트는 const 키워드를 사용할시 재할당이 불가능하지만,
// 객체,배열의 내부값은 참조를 통해 변경 가능함

// 아래의 코드는 불변성을 위반하지 않는 코드.
/*import create from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (dataFromBtn) =>
        set((state) => {
          const testIndex = state.cart.findIndex(
            (cartItem) => cartItem.id === dataFromBtn.id
          );
          let newCart = [...state.cart];
          if (testIndex >= 0) {
            const itemToUpdate = { ...newCart[testIndex] };
            itemToUpdate.quantity += dataFromBtn.quantity;
            newCart = [
              ...newCart.slice(0, testIndex),
              itemToUpdate,
              ...newCart.slice(testIndex + 1)
            ];
          } else {
            newCart = [...newCart, dataFromBtn];
          }
          return { cart: newCart };
        }),
    }),
    {
      name: "cart_storage",
      getStorage: () => sessionStorage,
    }
  )
);

export default useCartStore;*/
