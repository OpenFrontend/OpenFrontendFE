import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAPI, signupAPI } from "../services/user";

export const loginItem = createAsyncThunk(
  "user/loginItem",
  async (payload, thunkAPI) => {
    let response = await loginAPI(payload);
    console.log("res=", response);
    if (response.isSuccessful === true) {
      // all localstorage work goes here
      return response.data;
    } else thunkAPI.rejectWithValue("network call failed");
  }
);
export const signupItem = createAsyncThunk(
  "user/signupItem",
  async (payload, thunkAPI) => {
    let response = await signupAPI(payload);
    console.log("res=", response);
    if (response.isSuccessful === true) {
      return response.data;
    } else thunkAPI.rejectWithValue("network call failed");
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: { userInfo: [], loggedIn: false },
  reducers: {
    logoutFunction: (state, action) => {
      state.userInfo = "";
      let updateConnector = false;
      state.loggedIn = updateConnector;
      // localStorage.removeItem("userdata");
    },
  },
  extraReducers: {
    [loginItem.fulfilled]: (state, action) => {
      if (action.payload.token) {
        state.userInfo = action.payload;
        let updateConnector = true;
        state.loggedIn = updateConnector;
        localStorage.setItem("loggedIn", state.loggedIn);
      } else {
        state.loggedIn = false;
      }
    },
    [signupItem.fulfilled]: (state, action) => {
      if (action.payload.token) {
        state.userInfo = action.payload;
        let updateConnector = true;
        state.loggedIn = updateConnector;
        localStorage.setItem("loggedIn", state.loggedIn);
      } else {
        state.loggedIn = false;
      }
    },
  },
});
export const { logoutFunction } = userSlice.actions;
export default userSlice.reducer;
