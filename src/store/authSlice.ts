import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  name: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  name: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ token: string; name: string }>) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.name = null;
    },
  },
});

const { login, logout } = authSlice.actions;
export { login, logout, authSlice };
