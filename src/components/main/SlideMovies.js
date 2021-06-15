import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SlideMovies = () => {

    const [currentMovieDisplayed, setCurrentMovieDisplayed] = useState(0);

    const movies = [
        {
            title: "Godzilla vs Kong",
            img: "https://www.yesplanet.co.il/static/dam/jcr:5d258e92-ccb9-473f-9bba-b328ea113a4d",
            moviePage: "https://www.yesplanet.co.il/films/godzilla-vs-kong"
        },
        {
            title: "Cruella",
            img: "https://www.yesplanet.co.il/static/dam/jcr:3570cb9e-38a7-445a-8b0a-5d92b88e33af",
            moviePage: "https://www.yesplanet.co.il/films/cruella"
        },
        {
            title: "Fast and Furious 9",
            img: "https://www.yesplanet.co.il/static/dam/jcr:3e3d8f21-44eb-4f33-89f3-a75a5b4fe26a",
            moviePage: "https://www.yesplanet.co.il/films/fast-and-furious-9"
        }
    ]

    const showNextMovie = () => {
        if (currentMovieDisplayed === movies.length - 1)
            setCurrentMovieDisplayed(0)
        else
            setCurrentMovieDisplayed(currentMovieDisplayed + 1)
    }

    const showPreviousMovie = () => {
        if (currentMovieDisplayed === 0)
            setCurrentMovieDisplayed(movies.length - 1)
        else
            setCurrentMovieDisplayed(currentMovieDisplayed - 1)

    }

    // setInterval(() => {
    //     showNextMovie()
    // }, 5000);


    return (
        <div>
            <div className="movies-slide-show">
                <button onClick={showNextMovie} className="button-right">
                    <img src="https://www.yesplanet.co.il/xmedia/img/YesPlanet//slider-arrow-right.svg" alt="חץ ימינה" />
                </button>
                <div className="movie-slide">
                    <Link to={`/movies/${movies[currentMovieDisplayed].title}`} className="shown-movie"  >
                        <img src={movies[currentMovieDisplayed].img} alt={movies[currentMovieDisplayed].title} />
                    </Link>
                </div>
                <button onClick={showPreviousMovie} className="button-left">
                    <img src="https://www.yesplanet.co.il/xmedia/img/YesPlanet//slider-arrow-left.svg" alt=" חץ שמאלה" />
                </button>
            </div>
        </div>
    )
}

export default SlideMovies
