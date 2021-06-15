import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

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
        console.log(res)
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