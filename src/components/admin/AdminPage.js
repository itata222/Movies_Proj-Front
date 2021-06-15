import React from 'react';
import { useHistory } from 'react-router';

const AdminPage = () => {

    const history = useHistory();

    const addNewMovie = (e) => {
        e.preventDefault();
        history.push('/admin/addMovieToSystem');
    }

    const addNewShow = (e) => {
        e.preventDefault();
        history.push('/admin/addNewShow');
    }
    const editShow = (e) => {
        e.preventDefault();
        history.push('/admin/editShow');
    }
    const editMovie = (e) => {
        e.preventDefault();
        history.push('/admin/editMovie');
    }

    return (
        <div className="AdminPage">
            <button onClick={addNewMovie}>
                <span>Add a Movie To The System</span>
            </button>
            <button onClick={addNewShow}>
                <span> Add a Show To A Cinema</span>
            </button>
            <button onClick={editShow}>
                <span>Edit a Movie</span>
            </button>
            <button onClick={editMovie}>
                <span>Edit a Show</span>
            </button>
        </div>
    )
}

export default AdminPage;