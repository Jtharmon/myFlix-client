import { MovieCard } from "../movie-card/movie-card";
import PropTypes from 'prop-types';
import './movie-view.scss';
import createUtilityClassName from "../../../node_modules/react-bootstrap/esm/createUtilityClasses";
import { Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";


export const MovieView = ({ m }) => {
    const { movieId } = useParams();

    const movie = m.find((b) => m._id === movieId);

    return (
        <div>
            <div>
                <img src={movie.Image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.Director}</span>
            </div>

            <Button
                //onClick={}
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

