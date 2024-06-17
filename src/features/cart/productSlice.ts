import { RootState } from '@/store/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ProductState {
  quantities: Record<number, number>;
}

const initialState: ProductState = {
  quantities: {},
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increaseProductQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (!state.quantities[productId]) {
        state.quantities[productId] = 1;
      } else {
        state.quantities[productId] += 1;
      }
    },
    decreaseProductQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      if (state.quantities[productId] && state.quantities[productId] > 1) {
        state.quantities[productId] -= 1;
      }
    },
    clearQuantity: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.quantities[productId] = 1;
    },
  },
});

export const {
  increaseProductQuantity,
  decreaseProductQuantity,
  clearQuantity,
} = productSlice.actions;

export const getProductQuantity = (productId: number) => (state: RootState) =>
  state.product.quantities[productId] || 1;

export default productSlice.reducer;
