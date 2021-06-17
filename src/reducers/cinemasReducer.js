export const initialCinemasState = [];

const cinemasReducer = (cinemas, action) => {
    switch (action.type) {
        case 'SET_CINEMAS':
            return [...action.cinemas]
        default:
            return [...cinemas];
    }
}

export default cinemasReducer;