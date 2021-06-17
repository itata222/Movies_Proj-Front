import Axios from 'axios';

const developmentDB = process.env.REACT_APP_DB;

export const adminloginToDB = async (email, password) => {
    try {
        const res = await Axios.post(developmentDB + "/admin/login", { email, password });
        return res;
    } catch (err) {
        return err.response.data.message;
    }
};

export const adminlogoutFromDB = async (token) => {
    try {
        const res = await Axios.post(developmentDB + "/admin/logout", { token }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
export const addMovieFunc = async (token, movie) => {
    try {
        const res = await Axios.post(developmentDB + "/admin/add-movie", { token, movie }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
export const addShowFunc = async (token, show) => {
    try {
        const res = await Axios.post(developmentDB + "/admin/add-show", { show }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}

export const editMovieFunc = async (token, id, updatedMovie) => {
    try {
        const res = await Axios.patch(developmentDB + "/admin/edit-movie?id=" + id, { updatedMovie }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
export const editShowFunc = async (token, id, updatedShow) => {
    try {
        const res = await Axios.patch(developmentDB + "/admin/edit-show?id=" + id, { updatedShow }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return res.data
    } catch (err) {
        console.log(err);
    }
}
