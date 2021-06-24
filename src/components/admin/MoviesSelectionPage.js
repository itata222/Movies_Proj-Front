import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { setMoviesAction } from '../../actions/adminActions';
import { MoviesContext } from '../../contexts/moviesContext';
import { getAllMoviesFunc } from '../../services/userService';
import Spinner from '../main/Spinner';

const AdminMoviesSelectionPage = () => {
    const { moviesData, dispatchMoviesData } = useContext(MoviesContext);

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const history = useHistory();

    useEffect(() => {
        let isComponentExist = true;
        if (isComponentExist) {
            getAllMoviesFunc().then((response) => {
                dispatchMoviesData(setMoviesAction(response));
                setIsPageLoaded(true)
            }).catch((e) => {
                console.log(e)
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, [dispatchMoviesData]);

    const onClick = (movie) => {
        history.push(`/admin/editMovie/${movie._id}`)
    }

    return (
        <div className="all-movies">
            {
                isPageLoaded ?
                    <div className="movies">
                        <div className="movies-header">
                            Choose A Movie To Edit:
                        </div>
                        {
                            moviesData.map((movie, i) => (
                                <div className="movie" key={i} onClick={() => onClick(movie)}>
                                    {movie.title}
                                </div>
                            ))
                        }
                    </div> :
                    <Spinner />
            }
        </div>
    )
}

export default AdminMoviesSelectionPage
