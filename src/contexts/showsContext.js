import React, { createContext, useReducer } from 'react';
import showsReducer, { showsInitialState } from '../reducers/showsReducer';

export const ShowsContext = createContext();

const ShowsContextProvider = (props) => {

    const [showsData, dispatchShowsData] = useReducer(showsReducer, showsInitialState);

    return (
        <ShowsContext.Provider value={{ showsData, dispatchShowsData }}>
            {props.children}
        </ShowsContext.Provider>
    );
};

export default ShowsContextProvider;