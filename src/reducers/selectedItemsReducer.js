export const initialSelectedItemsState = {
    cinema: null,
    movie: null
}


const selectedItemsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CINEMA':
            return {
                ...state,
                cinema: action.cinema
            }
        case 'SET_MOVIE':
            return {
                ...state,
                movie: action.movie
            }
        default:
            return state;
    }
}

export default selectedItemsReducer
