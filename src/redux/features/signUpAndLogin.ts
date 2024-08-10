import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ISignUpAndLoginState {
  isLoginComponent: boolean;
}

const initialState: ISignUpAndLoginState = {
  isLoginComponent: true,
};

export const SignUpAndLoginSlice = createSlice({
  name: "signUpAndLogin",
  initialState,
  reducers: {
    loginComponentOpen: (state) => {
      state.isLoginComponent = true;
    },

    signUpComponentOpen: (state) => {
      state.isLoginComponent = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginComponentOpen, signUpComponentOpen } =
  SignUpAndLoginSlice.actions;

export default SignUpAndLoginSlice.reducer;
