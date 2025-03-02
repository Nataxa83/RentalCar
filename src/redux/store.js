import { configureStore } from "@reduxjs/toolkit";
import  carsReducer from "./cars/slice";
// import { filtersReducer } from "../redux/filters/slice";
import storage from "redux-persist/lib/storage";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";


const persistConfig = {
    key: "cars",
    storage,   
    whitelist: [], 
}
const persistedReducer = persistReducer(persistConfig, carsReducer);
export const store = configureStore({
  
  reducer: {
    
    carsData: persistedReducer,
        // filtersData: filtersReducer,

    },

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});
          console.log("Состояние стора при запуске:", store.getState());
export const persistor = persistStore(store);




