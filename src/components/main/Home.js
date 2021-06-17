import React from 'react';
import CinemaShows from './CinemaShows';
import FiltersCinemas from './FiltersCinemas';
import SlideMovies from './SlideMovies';


const Home = () => {


    return (
        <div className="home">
            <SlideMovies />
            <h2>להזמנת כרטיסים</h2>
            <FiltersCinemas />
            <CinemaShows user='user' />
        </div>
    )
}

export default Home
