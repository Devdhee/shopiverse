import { RootState } from '@/store/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface userData {
  fullName: string;
  email: string;
  mobileNumber: string;
  address: string;
}

const initialState: userData = {
  fullName: '',
  email: '',
  mobileNumber: '',
  address: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<userData>) => {
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.mobileNumber = action.payload.mobileNumber;
      state.address = action.payload.address;
    },
  },
});

export const { setUserData } = userSlice.actions;
export const getUserData = (state: RootState) => state.user;

export default userSlice.reducer;
