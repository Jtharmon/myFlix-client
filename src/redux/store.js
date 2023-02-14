import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/books";
import userReducer from "./reducers/user";

export const store = configureStore({
    reducer: { movies: moviesReducer, user: userReducer }
});

