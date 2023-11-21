import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: "light" as "light" | "dark",
    reducers: {
        setTheme: (state, action) => {
            return (state = action.payload);
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
