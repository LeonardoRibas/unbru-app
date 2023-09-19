import { createSlice } from "@reduxjs/toolkit";

export const dayIndexSlice = createSlice({
    name: "dayIndex",
    initialState: "",
    reducers: {
        setDayIndex: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { setDayIndex } = dayIndexSlice.actions;

export default dayIndexSlice.reducer;
