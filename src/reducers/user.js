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
    console.log("in signupitem" + JSON.stringify(payload));
    let response = await signupAPI(payload);
    console.log("res=", response);
    if (response.isSuccessful === true) {
      return response.data;
    } else thunkAPI.rejectWithValue("network call failed");
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("userInfo"),
    loggedIn: localStorage.getItem("loggedIn"),
    token: localStorage.getItem("token"),
  },
  reducers: {
    logoutFunction: (state, action) => {
      state.token = "";
      let updateConnector = false;
      state.loggedIn = updateConnector;
      localStorage.removeItem("token");
      localStorage.removeItem("loggedIn");
    },
  },
  extraReducers: {
    [loginItem.fulfilled]: (state, action) => {
      if (action.payload.token) {
        state.token = action.payload;
        let updateConnector = true;
        state.loggedIn = updateConnector;
        localStorage.setItem("loggedIn", state.loggedIn);
        localStorage.setItem("token", state.token);
      } else {
        state.loggedIn = false;
      }
    },
    [signupItem.fulfilled]: (state, action) => {
      if (action.payload) {
        state.token = action.payload;
        let updateConnector = true;
        state.loggedIn = updateConnector;
        localStorage.setItem("loggedIn", state.loggedIn);
        localStorage.setItem("token", state.token);
      } else {
        state.loggedIn = false;
      }
    },
  },
});
export const { logoutFunction } = userSlice.actions;
export default userSlice.reducer;
