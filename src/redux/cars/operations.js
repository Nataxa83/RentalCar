import { createAsyncThunk } from "@reduxjs/toolkit";
import apiCars  from "../../api";

export const fetchCars = createAsyncThunk(
    "cars/getCars",
    async (_, thunkAPI) => {
      try {
        const { data } = await apiCars.get(`/cars?limit=12&page=1`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const fetchMoreCars = createAsyncThunk(
    "cars/getMoreCars",
    async (options, thunkAPI) => {
      const query = Object.entries(options)
    
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
      try {
        const { data } = await apiCars.get(`/cars?${query}`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const fetchCarById = createAsyncThunk(
    "cars/getCarByID",
    async (id, thunkAPI) => {
      try {
        const { data } = await apiCars.get(`/cars/${id}`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  