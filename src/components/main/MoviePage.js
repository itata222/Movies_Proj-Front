import React, { useContext, useEffect, useState } from 'react'
import { setSelectedMovieAction } from '../../actions/selectedItemsActions';
import { SelectedItemsContext } from '../../contexts/selectedItemsContext';
import { getMovieByIdFunc, getMovieRating } from '../../services/userService';
import AddReview from './AddReview';
import MovieReviews from './MovieReviews';
import Spinner from './Spinner';

const MoviePage = (props) => {
    const movieID = props.match.params.id
    const [avgRating, setAvgRating] = useState(0);
    const { dispatchSelectedItemsData, selectedItemsData } = useContext(SelectedItemsContext);
    useEffect(() => {
        getMovieByIdFunc(movieID).then(async (res) => {
            dispatchSelectedItemsData(setSelectedMovieAction(res))
            const averageRating = await getMovieRating(res);
            setAvgRating(averageRating || 3);
        }).catch(e => console.log(e))
    }, [selectedItemsData, movieID, dispatchSelectedItemsData]);

    return (
        <div className="movie-page">
            {selectedItemsData.movie?.img ?
                <>
                    <div className="movie-header">
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span>{avgRating}</span>
                        <h1>{selectedItemsData.movie.title}</h1>
                    </div>
                    <div className="movie-section">
                        <div className="movie-img">
                            <img src={selectedItemsData.movie.img} alt="movie img" />
                        </div>
                        <div className="movie-details-section">
                            <div className="movie-description">
                                {selectedItemsData.movie.description}
                            </div>
                            <div className="movie-duration">
                                <span>{selectedItemsData.movie.category},</span>
                                <span>{selectedItemsData.movie.duration} Mins</span>
                            </div>
                        </div>
                    </div>
                    <div className="movie-reviews">
                        <AddReview movieID={movieID} />
                        <MovieReviews movie={selectedItemsData.movie} />
                    </div>
                </> :
                <Spinner />
            }
        </div>
    )
}

export default MoviePage
