import React from "react";

import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {

    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Silence of the Lambs",
            image:
                "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
            director: "Jonathan Demme"
        },
        {
            id: 2,
            title: "Trainwreck",
            image:
                "https://m.media-amazon.com/images/I/51Vttr6XpQL._AC_.jpg",
            director: "Judd Apatow"
        },
        {
            id: 3,
            title: "Tenet",
            image:
                "https://m.media-amazon.com/images/I/91BnDPpVcBL.jpg",
            director: "Christopher Nolan"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
        
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                    setSelectedMovie(newSelectedMovie);}
                }/>
            ))}
        </div>
    );
};

