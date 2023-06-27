import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dayIndexReducer from "./features/dayIndexSlice";
import menuReducer from "./features/menuSlice";
import mealReducer from "./features/mealSlice";
import veganReducer from "./features/isVeganSlice";
import ovolactoReducer from "./features/isOvolactoSlice";

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
    isVegan: veganReducer,
    isOvolacto: ovolactoReducer,
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

export default store;
