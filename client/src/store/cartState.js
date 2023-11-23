import create from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (dataFromBtn) =>
        set((state) => {
          const testIndex = dataFromBtn.id.findIndex(()=>(
            
          ))
          if(){}else{
            return (
              cart : {[...state.cart,{...dataFromBtn,quantity:1}]}
            )
          }
        }),
    }),
    {
      name: "cart_storage", // unique name
      getStorage: () => localStorage, // use sessionStorage
    }
  )
);

export default useCartStore;
