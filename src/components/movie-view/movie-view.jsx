import { MovieCard } from "../movie-card/movie-card";
import PropTypes from 'prop-types';
import './movie-view.scss';
import createUtilityClassName from "../../../node_modules/react-bootstrap/esm/createUtilityClasses";
import { Button } from "react-bootstrap";


export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div>
            <div>
                <img src={movie.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.director}</span>
            </div>

            <Button
                onClick={onBackClick}
                className="back-button"
                style={{ cursor: "pointer" }}
            >
                Back
            </Button>


        </div>
    );
};

MovieCard.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,

    })
}

