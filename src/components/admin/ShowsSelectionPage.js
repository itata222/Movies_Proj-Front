import React from 'react'
import FiltersHome from '../filters/FiltersHome'
import CinemaShows from '../home/CinemaShows'


const AdminShowsSelectionPage = () => {


    return (
        <div className="all-shows">
            <div className="shows">
                <h2 className="shows-header"> :Choose A Show To Edit</h2>
                <div className="filters">
                    <FiltersHome />
                </div>
                <CinemaShows user='admin' />
            </div>
        </div>
    )
}

export default AdminShowsSelectionPage