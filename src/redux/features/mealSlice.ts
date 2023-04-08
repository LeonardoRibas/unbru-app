import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
    name: "meal",
    initialState: {
        value: "",
    },
    reducers: {
        setMeal: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setMeal } = mealSlice.actions;

export default mealSlice.reducer;
