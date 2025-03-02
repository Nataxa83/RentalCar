import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCars, fetchMoreCars } from "./operations";

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
            isAnyOf(fetchCars.pending, fetchMoreCars.pending),
            (state) => {
              state.loading = true;
              state.error = null;
            }
          )

          .addMatcher(
            isAnyOf(fetchCars.fulfilled, fetchMoreCars.fulfilled),
            (state, action) => {
              console.log("Fetched Cars:", action.payload);  
              state.loading = false;

              // state.cars = action.payload || [];
              state.cars = [...new Map([...state.cars, ...action.payload.cars].map(car => [car.id, car])).values()];
              state.page = action.payload.page || 1;
              state.totalPages = action.payload.totalPages || 1;
            }
          )

          .addMatcher(
            isAnyOf(fetchCars.rejected, fetchMoreCars.rejected),
            (state, action) => {
              state.loading = false;
              state.error = action.error ? action.error.message : "An error occurred";
            }
          )
     
      },

});


export default carsSlice.reducer;