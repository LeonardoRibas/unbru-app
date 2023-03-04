import { createSlice } from "@reduxjs/toolkit";
import { getApropriateDate } from "../../utils/date";

export const dayIndexSlice = createSlice({
    name: "dayIndex",
    initialState: {
        value: getApropriateDate(),
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
