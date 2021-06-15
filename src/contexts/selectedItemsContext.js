import React, { createContext, useEffect, useReducer } from 'react';
// import { setCinemaAction } from '../actions/selectedItemsActions';
import selectedItemsReducer, { initialSelectedItemsState } from '../reducers/selectedItemsReducer';

export const SelectedItemsContext = createContext();

const SelectedItemsContextProvider = (props) => {
    const
    const [selectedItemsData, dispatchSelectedItemsData] = useReducer(selectedItemsReducer, initialSelectedItemsState);

    useEffect(() => {
        let isComponentExist = true;
        getCinemas().then((response) => {
            console.log(response.data)
            // if (isComponentExist) {
            //     dispatchSelectedItemsData(setCinemaAction(response.data))
            // }
        }).catch((err) => {
            console.log('err', err)
        })
        return () => {
            isComponentExist = false
        };
    }, [props.courseTitle]);


    return (
        <SelectedItemsContext.Provider value={{ selectedItemsData, dispatchSelectedItemsData }}>
            {props.children}
        </SelectedItemsContext.Provider>
    )

}

export default SelectedItemsContextProvider;