import { create } from 'zustand'

export type CartItem = {
  menuItemId: number
  name: string
  price: number
  quantity: number
  imageUrl: string
  restaurantId: number
}

type CartStore = {
  items: CartItem[]
  restaurantId: number | null
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (menuItemId: number) => void
  updateQuantity: (menuItemId: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  restaurantId: null,

  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.menuItemId === item.menuItemId)
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.menuItemId === item.menuItemId ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        }
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        restaurantId: item.restaurantId,
      }
    }),

  removeItem: (menuItemId) =>
    set((state) => ({
      items: state.items.filter((i) => i.menuItemId !== menuItemId),
    })),

  updateQuantity: (menuItemId, quantity) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((i) => i.menuItemId !== menuItemId)
          : state.items.map((i) => (i.menuItemId === menuItemId ? { ...i, quantity } : i)),
    })),

  clearCart: () => set({ items: [], restaurantId: null }),
}))
