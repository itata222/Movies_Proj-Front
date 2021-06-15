export const moviesInitialState = [];

const moviesReducer = (movies, action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return [...movies, action.movie];
        case "SET_MOVIES":
            return [...action.movies];
        default:
            return [...movies];
    }
};

export default moviesReducer;