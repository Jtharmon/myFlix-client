import React from "react";
import PropTypes from 'prop-types';


import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col } from "react-bootstrap";

export const MainView = () => {

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    useEffect(() => {
        if (!token) {
            return;
        }
        fetch("http://localhost:5000/movie-api/movies", {
            headers: { Authorization: 'Bearer ${token}' },
        })

            .then((response) => response.json())
            .then((movies) => {
                setMovies(movies);
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
    }, [token]);

        return (
            <Row>
                {!user ? (
                    <>
                        <LoginView
                            onLoggedIn={(user, token) => {
                                setUser(user);
                                setToken(token);
                            }} />
                        < SignupView />
                    </>
                ) :
                    selectedMovie ? (
                        <MovieView
                            movie={selectedMovie}
                            onBackClick={() => setSelectedMovie(null)}
                        />
                            
                ) :
                movies.length === 0 ? (
                    <div>The list is empty!</div>
                ) : 
                (
                    <div>
                        {movies.map((movie) => (
                            <MovieCard
                                movie={movie}
                                onMovieClick={(newSelectedMovie) => {
                                    setSelectedMovie(newSelectedMovie);
                                }}
                            />
                        ))}
                    </div>

                )

                

                };

    </Row>
    );
};

<button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>