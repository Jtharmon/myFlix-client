import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        }
    }
});

export const { setMovies } = movieSlice.actions;

export default moviesSlice.reducer;
