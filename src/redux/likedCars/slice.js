import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  favorites: [],
};

const likedSlice = createSlice({
  name: "likedCars",
  initialState: INITIAL_STATE,
  reducers: {
    likeOn: (state, action) => {
        if (!state.favorites.includes(action.payload)) {
            state.favorites.push(action.payload);
        }
    },
    likeOff: (state, action) => {
      state.favorites = state.favorites.filter(item => item !== action.payload);
    },
  },
});

export const { likeOn, likeOff } = likedSlice.actions;

export default likedSlice.reducer;