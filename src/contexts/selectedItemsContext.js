import React, { createContext, useReducer } from 'react';
import selectedItemsReducer, { initialSelectedItemsState } from '../reducers/selectedItemsReducer';

export const SelectedItemsContext = createContext();

const SelectedItemsContextProvider = (props) => {
    const [selectedItemsData, dispatchSelectedItemsData] = useReducer(selectedItemsReducer, initialSelectedItemsState);

    return (
        <SelectedItemsContext.Provider value={{ selectedItemsData, dispatchSelectedItemsData }}>
            {props.children}
        </SelectedItemsContext.Provider>
    )

}

export default SelectedItemsContextProvider;