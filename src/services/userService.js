import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const getCinemaByTitle = async (title) => {
    try {
        const res = await Axios.get(developmentDB + "/get-cinema?title=" + title);
        return res.data
    } catch (err) {
        return err.message
    }
}
export const getMovieByIdFunc = async (id) => {
    try {
        const res = await Axios.get(developmentDB + "/get-movie?id=" + id);
        return res.data
    } catch (err) {
        return err.message
    }
}
export const getShowByIdFunc = async (id) => {
    try {
        const res = await Axios.get(developmentDB + "/get-show?id=" + id);
        return res.data
    } catch (err) {
        return err.message
    }
}

export const getAllMoviesFunc = async () => {
    try {
        const res = await Axios.get(developmentDB + "/all-movies");
        return res.data
    } catch (err) {
        return err.message
    }
}

export const getAllShowsFunc = async () => {
    try {
        const res = await Axios.get(developmentDB + "/all-shows");
        return res.data
    } catch (err) {
        return err.message
    }
}

export const getAllCinemasFunc = async () => {
    try {
        const res = await Axios.get(developmentDB + "/all-cinemas");
        return res.data
    } catch (err) {
        return err.message
    }
}

export const getAllCinemaShowsFunc = async (cinemaTitle) => {
    try {
        const res = await Axios.get(developmentDB + "/cinema-shows?title=" + cinemaTitle);
        return res.data
    } catch (err) {
        return err.message
    }
}

export const addReviewFunc = async (review, movieID) => {
    try {
        const res = await Axios.post(developmentDB + "/add-review?movieID=" + movieID, { review });
        return res.data
    } catch (e) {
        return e.message
    }
}
export const takeSeatsFunc = async (showID, seats) => {
    try {
        const res = await Axios.post(developmentDB + "/take-seats?showID=" + showID, { seats });
        return res.data
    } catch (e) {
        return e.message
    }
}

export const getMovieRating = async (movie) => {
    try {
        let total = 0;
        for (let i = 0; i < movie.reviews.length; i++) {
            total += movie.reviews[i].review.rating;
        }
        let avg = total / movie.reviews.length;
        // console.log(avg)
        return avg
    } catch (e) {
        return e.message
    }
}