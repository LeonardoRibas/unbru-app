import { createSlice } from "@reduxjs/toolkit";
import { getMealByTime } from "../../utils/date";

export const mealSlice = createSlice({
    name: "meal",
    initialState: {
        value: getMealByTime(),
    },
    reducers: {
        setMeal: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setMeal } = mealSlice.actions;

export default mealSlice.reducer;
