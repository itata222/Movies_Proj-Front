export const showsInitialState = [];

const showsReducer = (shows, action) => {
    switch (action.type) {
        case "ADD_SHOW":
            return [...shows, action.show];
        case "SET_SHOWS":
            return [...action.shows];
        default:
            return [...shows];
    }
};

export default showsReducer;