export const initialSelectedItemsState = {
    cinema: null,
    movie: null
}


const selectedItemsReducer = (selectedItems, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CINEMA':
            return {
                ...selectedItems,
                cinema: action.cinema
            }
        case 'SET_SELECTED_MOVIE':
            return {
                ...selectedItems,
                movie: action.movie
            }
        default:
            return { ...selectedItems };
    }
}

export default selectedItemsReducer
