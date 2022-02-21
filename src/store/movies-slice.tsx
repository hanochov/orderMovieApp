import { createSlice } from "@reduxjs/toolkit";
import Movie from "../models/movie";

interface MyState {
  movies: Movie[];
  currentMovie: Movie;
  currentMovieId: number;
  currenPage: number;
  totalPages: number;
  displayedPage: number;
}

const INITIAL_STATE: MyState = {
  movies: [],
  currentMovie: {
    adult: false,
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 7700.02,
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8.4,
    vote_count: 7867,
    favorite: false,
    currentPage: 1,
  },
  currentMovieId: 0,
  currenPage: 1,
  totalPages: 0,
  displayedPage: 1,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: INITIAL_STATE,
  reducers: {
    setDefaultMovies(state, action) {
      // debugger;
      const newData = JSON.parse(JSON.stringify(action.payload));
      const initialData = JSON.parse(JSON.stringify(state.movies));
      const ids = new Set(initialData.map((d: any) => d.id));
      const merged = [
        ...initialData,
        ...newData.filter((d: any) => !ids.has(d.id)),
      ];
      state.movies = merged;
    },
    setCurPage(state, action) {
      state.currenPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setDisplayedPage(state, action) {
      state.displayedPage = action.payload;
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice;
