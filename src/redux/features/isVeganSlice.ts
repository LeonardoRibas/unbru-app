import { createSlice } from "@reduxjs/toolkit";

export const isVeganSlice = createSlice({
    name: "isVegan",
    initialState: {
        value: false,
    },
    reducers: {
        setIsVegan: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setIsVegan } = isVeganSlice.actions;

export const isVegan = (state) => state.isVegan.value;

export default isVeganSlice.reducer;
