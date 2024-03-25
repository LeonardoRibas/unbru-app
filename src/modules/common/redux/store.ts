import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dayIndexReducer from "./features/dayIndexSlice";
import menuReducer from "./features/menuSlice";
import mealReducer from "./features/mealSlice";
import campusReducer from "./features/campusSlice";
import themeReducer from "./features/themeSlice";

import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage: AsyncStorage,
};

const reducers = combineReducers({
    dayIndex: dayIndexReducer,
    menu: menuReducer,
    meal: mealReducer,
    campus: campusReducer,
    theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
