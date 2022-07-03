import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthStateType {
  name: string;
}

const initialState: AuthStateType = {
  name: '',
};

// const initialState = {
//   name: '',
// } as AuthStateType;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    clearUser() {
      return initialState;
    },
  },
});

export const {updateUser, clearUser} = authSlice.actions;

export default authSlice.reducer;
