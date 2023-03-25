import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { MoviesList } from "../movies-list/movies-list";

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [movies, setMovies] = useState([]);
    const [username, setUsername] = useState("");
    const [signedUpSuccess, setSignedUpSuccess] = useState(false);
    const [user, setUser] = useState(storedUser || null);
    const [token, setToken] = useState(storedToken || null);

    useEffect(() => {
        if (!token) {
            return;
        }
        fetch("https://movie-api1.herokuapp.com/movie-api/movies", {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                const Movieapi = data.map((doc) => {
                    console.log(doc);
                    return {
                        _id: doc._id,
                        Title: doc.Title,
                        Image: doc.ImagePath,
                        Director: doc.Director.Name
                    };
                });
                setMovies(Movieapi);
            });
    }, [token]);

    return (
        <BrowserRouter>
            <Row className="justify-content-md-center">
                <Routes>
                    <Route
                        path="/signup"
                        element={
                            <React.Fragment>
                                {username || signedUpSuccess ? (
                                    <Navigate to="/" />
                                ) : (
                                    <SignupView onSignedUp={() => setSignedUpSuccess(true)} />
                                )}
                            </React.Fragment>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <React.Fragment>
                                {username ? (
                                    <Navigate to="/" />
                                ) : (
                                    <LoginView
                                        onLoggedIn={(username, token) => {
                                            setUsername(username);
                                            setToken(token);
                                        }}
                                    />
                                )}
                            </React.Fragment>
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
            </Row>
        </BrowserRouter>
    );
};

<button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
