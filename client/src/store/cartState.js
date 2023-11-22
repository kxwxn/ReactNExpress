import create from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (dataFromBtn) => {
    set((state) => ({ ...state.cart, dataFromBtn }));
  },
}));

export default useCartStore;

//state는 현재 this 의 상태이다.
// ... 을 사용하는 이유는
