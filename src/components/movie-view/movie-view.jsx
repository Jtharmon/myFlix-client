import { MovieCard } from "../movie-card/movie-card";
import PropTypes from 'prop-types';


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
            <button
                onClick={() => {
                    onBackClick();
                }}
            >
                Back
            </button>
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

