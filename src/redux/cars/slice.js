import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCars, fetchMoreCars, fetchCarById } from "./operations";

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
            isAnyOf(fetchCars.pending, fetchMoreCars.pending, fetchCarById.pending ),
            (state) => {
              state.loading = true;
              state.error = null;
            }
          )

          .addMatcher(
            isAnyOf(fetchCars.fulfilled, fetchMoreCars.fulfilled, fetchCarById.fulfilled),
            (state, action) => {
              console.log("Fetched Cars:", action.payload);  
              state.loading = false;

              if (Array.isArray(action.payload.cars)) {
                state.cars = [...new Map([...state.cars, ...action.payload.cars].map(car => [car.id, car])).values()];
                state.page = action.payload.page || 1;
                state.totalPages = action.payload.totalPages || 1;
                state.current = action.payload.current || 1;
            } else if (action.payload.id) {
                state.cars = [...new Map([...state.cars, action.payload].map(car => [car.id, car])).values()];
            }
            }
          )

          .addMatcher(
            isAnyOf(fetchCars.rejected, fetchMoreCars.rejected, fetchCarById.rejected),
            (state, action) => {
              state.loading = false;
              state.error = action.error ? action.error.message : "An error occurred";
            }
          )
     
      },

});


export default carsSlice.reducer;