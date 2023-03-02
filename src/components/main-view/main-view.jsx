import React from "react";
import PropTypes from 'prop-types';


import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { MoviesList } from "../movies-list/movies-list";



export const MainView = () => {



    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
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

                dispatch (setMovies(Movieapi));
            });
    }, []);

    return (
            <BrowserRouter>
            <Row className="justify-content-md-center">
               <Routes>
                <Route
                        path="/signup"
                        element={!user ? (<Navigate to="/" />) : ("")}
                />
                <Route
                    path="/login"
                    element={
                        <>
                            {user ? (
                                <Navigate to="/" />
                            ) : (
                                    <><><LoginView onLoggedIn={(user) => setUser(user)} /></><SignupView /></>
                            )}
                    </>

                }
               />
            <Route
                path="/movies/:movieId"
                element={
                    <>
                        {!user ? (
                            <Navigate to="/login" replace />
                        ) : movie.length === 0 ? (
                            <Col>The list is empty!</Col>
                        ) : (
                            <Col md={8}>
                                <MovieView movies={movies} />
                            </Col>
                        )}
                    </>
                }
            />
                    <Route
                        path="/"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    <Col>the list is empty!</Col>
                                ) : (
                                    <>
                                        {movies.map((movie) => (
                                            <Col className="mb-4" key={movie.id} md={3}>
                                                <MovieCard movie={movie} />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                </Routes>
            </Row >
        </BrowserRouter >
    );
};

<button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>