import React from "react";
import PropTypes from 'prop-types';


import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [User, setUser] = useState(null);
    const [token, setToken] = useState(null);
    useEffect(() => {
        fetch("http://localhost:5000/movie-api/movies")
            .then((response) => response.json())
            .then((data) => {
                const Movieapi = data.map((doc) => {
                    console.log(doc);
                    return {
                        id: doc.Movieid,
                        title: doc.Title,
                        image: doc.ImagePath,
                        director: doc.Director.Name
                    };
                });

                setMovies(Movieapi);
            });
    }, []);

    if (!user) {
        return (
            <LoginView
                onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                }}
              />
        );
}


    if (!user) {
        return <LoginView />; 
    }


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
                        setSelectedMovie(newSelectedMovie);
                    }
                    } />
            ))}
        </div>
    );
};

<button onClick={() => { setUser(null); }}>Logout</button>