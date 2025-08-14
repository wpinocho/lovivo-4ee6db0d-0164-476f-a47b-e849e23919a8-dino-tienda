import { create } from 'zustand';

export interface Dinosaur {
  id: number;
  name: string;
  species: string;
  price: number;
  image: string;
  category: 'carnivore' | 'herbivore' | 'omnivore';
  period: string;
  description: string;
  inStock: boolean;
}

export interface CartItem extends Dinosaur {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (dinosaur: Dinosaur) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  
  addItem: (dinosaur) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === dinosaur.id);
    
    if (existingItem) {
      set({
        items: items.map(item =>
          item.id === dinosaur.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        items: [...items, { ...dinosaur, quantity: 1 }]
      });
    }
    
    console.log('Dinosaur added to cart:', dinosaur.name);
  },
  
  removeItem: (id) => {
    set({
      items: get().items.filter(item => item.id !== id)
    });
    console.log('Item removed from cart:', id);
  },
  
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      get().removeItem(id);
      return;
    }
    
    set({
      items: get().items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    });
  },
  
  clearCart: () => {
    set({ items: [] });
    console.log('Cart cleared');
  },
  
  toggleCart: () => {
    set({ isOpen: !get().isOpen });
  },
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));