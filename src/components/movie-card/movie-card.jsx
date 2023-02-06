import React from "react";
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <Card>
            <Card.img varient="top" src={movie.img} />
            <Card.body>
                <Card.title>{movie.title}</Card.title>
                <Card.text>{movie.author}</Card.text>
                <Link to={'/movies/${encodeURIComponent(movie.id)}'}>
                    <button variant="link">Open</button>
                </Link>
            </Card.body>
        </Card>
    );
};



MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};

