import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/movies";
import UserReducer from "./reducers/user/user";

export const store = configureStore({
    reducer: { movies: moviesReducer, user: userReducer }
});

