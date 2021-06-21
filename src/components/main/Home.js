import React, { } from 'react';
import CinemaShows from './CinemaShows';
import FiltersHome from './FiltersHome';
import SlideMovies from './SlideMovies';


const Home = () => {


    return (
        <div className="home">
            <SlideMovies />
            <h2>להזמנת כרטיסים</h2>
            <div className="filters">
                <FiltersHome />
            </div>
            <CinemaShows user='user' />
        </div>
    )
}

export default Home
