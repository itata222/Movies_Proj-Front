import React, { useEffect, useState } from 'react'
import { getMovieByIdFunc, getMovieRating } from '../../services/userService';
import AddReview from './AddReview';
import MovieReviews from './MovieReviews';
import Spinner from '../main/Spinner';

const MoviePage = (props) => {
    const movieID = props.match.params.id
    const [avgRating, setAvgRating] = useState(0);
    const [movie, setMovie] = useState({});
    useEffect(() => {
        getMovieByIdFunc(movieID).then(async (res) => {
            const averageRating = await getMovieRating(res);
            setAvgRating(averageRating || 3);
            setMovie(res)
        }).catch(e => console.log(e))
    }, [movieID]);

    return (
        <div className="movie-page">
            {movie?.img ?
                <>
                    <div className="movie-header">
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span>{avgRating}</span>
                        <h1>{movie.title}</h1>
                    </div>
                    <div className="movie-section">
                        <div className="movie-img">
                            <img src={movie.img} alt="movie img" />
                        </div>
                        <div className="movie-details-section">
                            <div className="movie-description">
                                {movie.description}
                            </div>
                            <div className="movie-duration">
                                <span>{movie.category},</span>
                                <span>{movie.duration} Mins</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-reviews">
                        <AddReview movieID={movieID} />
                        <MovieReviews movie={movie} />
                    </div>
                </> :
                <Spinner />
            }
        </div>
    )
}

export default MoviePage
