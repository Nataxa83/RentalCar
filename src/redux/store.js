import { configureStore } from "@reduxjs/toolkit";
import  carsReducer from "./cars/slice";
import likedCarsReducer from "./likedCars/slice";
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
    likedCars: likedCarsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});
export const persistor = persistStore(store);




