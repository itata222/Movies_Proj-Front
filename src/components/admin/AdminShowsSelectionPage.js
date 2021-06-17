import React from 'react'
import CinemaShows from '../main/CinemaShows';
import FiltersCinemas from '../main/FiltersCinemas';


const AdminShowsSelectionPage = () => {


    return (
        <div className="all-shows">
            <div className="shows">
                <FiltersCinemas />
                <h2 className="shows-header"> Choose A Show To Edit:</h2>
                <CinemaShows user='admin' />
            </div>
        </div>
    )
}

export default AdminShowsSelectionPage