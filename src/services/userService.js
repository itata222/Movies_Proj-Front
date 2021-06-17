import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const getCinemaByTitle = async (title) => {
    try {
        const res = await Axios.get(developmentDB + "/get-cinema?title=" + title);
        return res.data
    } catch (err) {
        console.log(err);
    }
}
export const getMovieByIdFunc = async (id) => {
    try {
        const res = await Axios.get(developmentDB + "/get-movie?id=" + id);
        return res.data
    } catch (err) {
        console.log(err);
    }
}
export const getShowByIdFunc = async (id) => {
    try {
        const res = await Axios.get(developmentDB + "/get-show?id=" + id);
        return res.data
    } catch (err) {
        console.log(err);
    }
}

export const getAllMoviesFunc = async () => {
    try {
        const res = await Axios.get(developmentDB + "/all-movies");
        return res.data
    } catch (err) {
        console.log(err);
    }
}

export const getAllShowsFunc = async () => {
    try {
        const res = await Axios.get(developmentDB + "/all-shows");
        return res.data
    } catch (err) {
        console.log(err);
    }
}

export const getAllCinemasFunc = async () => {
    try {
        const res = await Axios.get(developmentDB + "/all-cinemas");
        return res.data
    } catch (err) {
        console.log(err);
    }
}

export const getAllCinemaShowsFunc = async (cinemaTitle) => {
    try {
        const res = await Axios.get(developmentDB + "/cinema-shows?title=" + cinemaTitle);
        return res.data
    } catch (err) {
        console.log(err);
    }
}