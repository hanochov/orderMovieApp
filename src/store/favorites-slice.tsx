import { createSlice } from "@reduxjs/toolkit";

interface MyState {
  favorites: number[];
}

const INITIAL_STATE: MyState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: INITIAL_STATE,
  reducers: {
    /**function add or remove action.paylod from the state */
    toggleFavorites(state, action) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((el) => el !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const favoritesActions = favoritesSlice.actions;

export default favoritesSlice;
