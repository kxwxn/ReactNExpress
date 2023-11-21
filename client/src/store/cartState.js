import create from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (item) => set((states) => ({ ...states.cart, item })),
}));

export default useCartStore;

//state는 현재 this 의 상태이다.
// ... 을 사용하는 이유는
