import React from "react";
import PropTypes from 'prop-types';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    return (
        <Card>
            <Card.Img varient="top" src={movie.Image} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Director}</Card.Text>
                <Link to={`/movies/${movie._id}`}>
                    <button variant="link">Open</button>
                </Link>
            </Card.Body>
        </Card>
    );
};



MovieCard.propTypes = {
    movie: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        Title: PropTypes.string.isRequired,
        Image: PropTypes.string.isRequired,
        Director: PropTypes.string.isRequired
    }).isRequired
};

