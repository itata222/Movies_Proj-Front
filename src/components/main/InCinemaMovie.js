import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { LoginContext } from '../../contexts/loginContext';


const InCinemaMovie = ({ movie }) => {

    const history = useHistory();
    const { userData } = useContext(LoginContext)

    const movieClicked = (movieObJ) => {
        if (userData.user === 'admin')
            history.push(`/admin/editMovie/${movieObJ._id}`)
        else {
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
