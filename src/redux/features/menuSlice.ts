import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: {
        value: [],
    },
    reducers: {
        setMenu: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
