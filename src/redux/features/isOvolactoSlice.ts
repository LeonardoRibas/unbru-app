import { createSlice } from "@reduxjs/toolkit";

export const isOvolactoSlice = createSlice({
    name: "isOvolacto",
    initialState: {
        value: false,
    },
    reducers: {
        setIsOvolacto: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setIsOvolacto } = isOvolactoSlice.actions;

export const isOvolacto = (state) => state.isOvolacto.value;

export default isOvolactoSlice.reducer;
