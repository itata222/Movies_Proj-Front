import React, { useEffect, useState } from 'react'
import { getAllMoviesFunc } from '../../services/userService';
import InCinemaMovie from './InCinemaMovie';
import Spinner from './Spinner';
import { nanoid } from 'nanoid';


const InCinema = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let isComponentExist = true;
        if (isComponentExist) {
            getAllMoviesFunc().then((res) => {
                setMovies(res)
            })
        }
        return () => {
            isComponentExist = false
        };
    }, []);


    return (
        <div className="in-cinema">
            <h1>All Movies</h1>
            <div className="in-cinema-movies">
                {
                    movies.length > 0 ?
                        movies.map((movie, i) => (
                            <InCinemaMovie movie={movie} key={nanoid()} />
                        ))
                        :
                        <Spinner />
                }
            </div>
        </div>
    )
}

export default InCinema
