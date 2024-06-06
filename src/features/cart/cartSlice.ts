import { RootState } from '@/store/store';
import { saveCartItems } from '@/utils/localStorage';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartItemData {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  cartItems: CartItemData[];
}

// const items = (() => {
//   const savedCartItems = localStorage?.getItem('cartItems');
//   if (savedCartItems) {
//     try {
//       return JSON.parse(savedCartItems);
//     } catch (error) {
//       console.error('Failed to parse cart items from localStorage:', error);
//       return [];
//     }
//   }
//   return [];
// })();

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemData>) => {
      state.cartItems.push(action.payload);

      // saveCartItems('cartItems', state.cartItems);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      // saveCartItems('cartItems', state.cartItems);
    },

    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.price * item.quantity;
      }

      // saveCartItems('cartItems', state.cartItems);
    },

    declareItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;

        if (item.quantity === 0)
          cartSlice.caseReducers.removeFromCart(state, action);

        // saveCartItems('cartItems', state.cartItems);
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      saveCartItems('cartItems', state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemQuantity,
  declareItemQuantity,
  clearCart,
} = cartSlice.actions;

export const getCart = (state: RootState) => state.cart.cartItems;
export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state: RootState) =>
  state.cart.cartItems.reduce((sum, item) => item.totalPrice + sum, 0);
export const getCurrentQuantityById = (id: number) => (state: RootState) =>
  state.cart.cartItems.find((item) => item.id === id)?.quantity ?? 0;

export default cartSlice.reducer;
