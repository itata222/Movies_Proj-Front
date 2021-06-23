export const filtersInitialState = {
    cinema: 'יס פלאנט ראשון לציון',
    day: 0
};

const filtersReducer = (filters, action) => {
    switch (action.type) {
        case 'SET_CINEMA_FILTER':
            return { ...filters, cinema: action.cinema };
        case 'SET_DAY_FILTER':
            return { ...filters, day: action.day };
        default:
            return { ...filters };
    }
};

export default filtersReducer;