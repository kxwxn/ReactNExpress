import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (i) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === i.id);
          if (existingItem) {
            // If the item already exists in the cart, increase the quantity
            return {
              cart: state.cart.map((item) =>
                item.id === i.id
                  ? { ...item, quantity: item.quantity + i.quantity }
                  : item
              ),
            };
          } else {
            // If the item does not exist in the cart, add it
            return { cart: [...state.cart, i] };
          }
        }),
      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),
      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        })),
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
