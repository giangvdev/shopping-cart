import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/useApi";
import StorageKeys from "../../constants/storage-keys";




 export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
     // call api to register
      const data = await userApi.register(payload);

      localStorage.setItem(StorageKeys.USER, data.jwt);

      localStorage.setItem(StorageKeys.TOKEN, JSON.stringify(data.user))
     // save data
     return data.user;
    }
  )
  export const login = createAsyncThunk(
    'user/login',
    async (payload) => {
     // call api to register
      const data = await userApi.login(payload);

      localStorage.setItem(StorageKeys.USER, data.jwt);

      localStorage.setItem(StorageKeys.TOKEN, JSON.stringify(data.user))
     // save data
     return data.user;
    }
  )
const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    // JSON.parse(localStorage.getItem(StorageKeys.USER)) ||
    reducers:{
        logout(state) {
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            state.current = {};
        },
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
        },
    }
});

const {reducer} = userSlice;
export default reducer;