import { createSlice } from "@reduxjs/toolkit";

export const dayIndexSlice = createSlice({
    name: "dayIndex",
    initialState: {
        value: "",
    },
    reducers: {
        setDayIndex: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setDayIndex } = dayIndexSlice.actions;

export const selectDayIndex = (state) => state.dayIndex.value;

export default dayIndexSlice.reducer;
