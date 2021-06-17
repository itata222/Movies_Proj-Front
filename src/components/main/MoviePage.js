import React, { useContext } from 'react'
import { SelectedItemsContext } from '../../contexts/selectedItemsContext';

const MoviePage = (props) => {
    console.log(props)
    const { selectedItemsData } = useContext(SelectedItemsContext);
    console.log(selectedItemsData)
    return (
        <div>
            sadasd
        </div>
    )
}

export default MoviePage
