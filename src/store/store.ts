import cartSlice from '@/features/cart/cartSlice';
import productSlice from '@/features/cart/productSlice';
import userSlice from '@/features/user/userSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
