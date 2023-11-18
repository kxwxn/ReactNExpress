import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (i) => set((state) => ({ cart: [...state.cart, i] })),
      subtractFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      deleteAll: () => set({ cart: [] }),
    }),
    {
      name: "Photo-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;

//using zustand library to state management, and with persist it can also keep the data in sessionstorage until the session is finished.