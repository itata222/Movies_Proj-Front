import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginContext } from '../../contexts/loginContext';
import { SelectedItemsContext } from '../../contexts/selectedItemsContext';
import { setSelectedMovieAction } from '../../actions/selectedItemsActions'


const InCinemaMovie = ({ movie }) => {

    const history = useHistory();
    const { userData } = useContext(LoginContext)
    const { dispatchSelectedItemsData } = useContext(SelectedItemsContext);

    const movieClicked = (movieObJ) => {
        if (userData.user === 'admin')
            history.push(`/admin/editMovie/${movieObJ._id}`)
        else {
            dispatchSelectedItemsData(setSelectedMovieAction(movieObJ))
            history.push(`/movie-page/${movieObJ._id}`)

        }
    }

    return (
        <div className="inCinemaMovie" onClick={() => movieClicked(movie)}>
            <div className="movie-img">
                <img src={movie.img} alt="movie img" />
            </div>
            <div className="movie-title">
                {movie.title}
            </div>
            <div className="movie-description">
                {movie.description}
            </div>
        </div>
    )
}

export default InCinemaMovie
