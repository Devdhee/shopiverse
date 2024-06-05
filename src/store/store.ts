import cartSlice from '@/features/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
