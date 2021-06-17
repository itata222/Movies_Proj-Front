import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../../contexts/moviesContext';
import { getAllMoviesFunc } from '../../services/userService';
import Spinner from './Spinner';

const SlideMovies = () => {

    const { moviesData, dispatchMoviesData } = useContext(MoviesContext);
    const [currentMovieDisplayed, setCurrentMovieDisplayed] = useState(0);
    const [slideMovies, setSlideMovies] = useState(moviesData || []);
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    useEffect(() => {
        let isComponentExist = true;
        if (isComponentExist) {
            getAllMoviesFunc().then((response) => {
                dispatchMoviesData(response);
                setSlideMovies(response)
                setIsPageLoaded(true)
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, [dispatchMoviesData]);

    const showNextMovie = () => {
        if (currentMovieDisplayed === slideMovies.length - 1)
            setCurrentMovieDisplayed(0)
        else
            setCurrentMovieDisplayed(currentMovieDisplayed + 1)
    }

    const showPreviousMovie = () => {
        if (currentMovieDisplayed === 0)
            setCurrentMovieDisplayed(slideMovies.length - 1)
        else
            setCurrentMovieDisplayed(currentMovieDisplayed - 1)

    }

    // setInterval(() => {
    //     showNextMovie()
    // }, 5000);


    return (
        <>
            {isPageLoaded ?
                <div className="movies-slide-show">
                    <button onClick={showNextMovie} className="button-right">
                        <img src="https://www.yesplanet.co.il/xmedia/img/YesPlanet//slider-arrow-right.svg" alt="חץ ימינה" />
                    </button>
                    <div className="movie-slide">
                        <Link to={`/movies/${slideMovies[currentMovieDisplayed].title}`} className="shown-movie"  >
                            <img src={slideMovies[currentMovieDisplayed].img} alt={slideMovies[currentMovieDisplayed].title} />
                        </Link>
                    </div>
                    <button onClick={showPreviousMovie} className="button-left">
                        <img src="https://www.yesplanet.co.il/xmedia/img/YesPlanet//slider-arrow-left.svg" alt=" חץ שמאלה" />
                    </button>
                </div> :
                <Spinner />
            }
        </>
    )
}

export default SlideMovies
