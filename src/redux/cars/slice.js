import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const INITIAL_STATE = {
    cars: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
};

const carsSlice = createSlice({
    name: "cars",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder

        .addMatcher(
            isAnyOf(fetchCars.pending),
            (state) => {
              state.loading = true;
              state.error = null;
            }
          )

          .addMatcher(
            isAnyOf(fetchCars.fulfilled),
            (state, action) => {
              console.log("Fetched Cars:", action.payload);  
              state.loading = false;

              state.cars = action.payload || [];
              state.page = action.payload.page || 1;
              state.totalPages = action.payload.totalPages || 1;
            }
          )

          .addMatcher(
            isAnyOf(fetchCars.rejected),
            (state, action) => {
              state.loading = false;
              state.error = action.error ? action.error.message : "An error occurred";
            }
          )
     
      },

});


export default carsSlice.reducer;