import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: "auth",

    initialState: {
        auth: false
    },

    reducers: {
        changeAuth(state, action) {
            state.auth = action.payload
        }
    }

});

export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;