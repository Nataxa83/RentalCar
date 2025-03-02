import { createAsyncThunk } from "@reduxjs/toolkit";
import apiCars  from "../../api";

export const fetchCars = createAsyncThunk(
    "cars/getCars",
    async (_, thunkAPI) => {
      try {

        console.log("Запрос на сервер..."); // ✅ Проверяем, отправляется ли запрос
        const { data } = await apiCars.get(`/cars?limit=12&page=1`);
        console.log("Ответ от сервера:", data); // ✅ Проверяем, что приходит от сервера
        return data;
      } catch (error) {
        console.error("Ошибка запроса:", error);
      //   const response = await apiCars.get(`/cars?limit=12&page=1`);
      // console.log("API Response:", response.data); // ✅ Проверяем, что приходит
      // return response.data.cars || []; // ✅ Берем именно `cars`, если API так его передает
      //   // const { data } = await apiCars.get(`/cars?limit=12&page=1`);
      //   // return data;
      // } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  