import { createSlice } from "@reduxjs/toolkit";

export const campusSlice = createSlice({
    name: "campus",
    initialState: "Darcy Ribeiro",
    reducers: {
        setCampus: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { setCampus } = campusSlice.actions;

export default campusSlice.reducer;
