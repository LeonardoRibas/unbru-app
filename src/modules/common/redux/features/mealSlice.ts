import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
    name: "meal",
    initialState: "",
    reducers: {
        setMeal: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { setMeal } = mealSlice.actions;

export default mealSlice.reducer;
