import create from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (dataFromBtn) =>
        set((state) => ({
          cart: [...state.cart, dataFromBtn].sort((a, b) => a.id - b.id),
        })),
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
