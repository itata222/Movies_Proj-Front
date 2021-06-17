import React, { createContext, useReducer } from 'react';
import cinemasReducer, { initialCinemasState } from '../reducers/cinemasReducer';

export const CinemasContext = createContext();

const CinemasContextProvider = (props) => {

    const [cinemasData, dispatchCinemasData] = useReducer(cinemasReducer, initialCinemasState);

    return (
        <CinemasContext.Provider value={{ cinemasData, dispatchCinemasData }}>
            {props.children}
        </CinemasContext.Provider>
    );
};

export default CinemasContextProvider;