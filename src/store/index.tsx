import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./movies-slice";
import orderSlice from "./order-slice";
import favoritesSlice from './favorites-slice'
import historySlice from './history-slice'


const store = configureStore({
  reducer: {

    movies: moviesSlice.reducer,
    order: orderSlice.reducer,
    favorites: favoritesSlice.reducer,
    history: historySlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  
});

export default store;
