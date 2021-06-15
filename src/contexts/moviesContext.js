import React, { createContext, useReducer } from 'react';
import moviesReducer, { moviesInitialState } from '../reducers/moviesReducer';

export const MoviesContext = createContext();

const MoviesContextProvider = (props) => {

    const [moviesData, dispatchMoviesData] = useReducer(moviesReducer, moviesInitialState);

    return (
        <MoviesContext.Provider value={{ moviesData, dispatchMoviesData }}>
            {props.children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;