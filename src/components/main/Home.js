import React from 'react';
import CinemaShows from './CinemaShows';
import FiltersCinemas from './FiltersCinemas';
import FiltersDays from './FiltersDays';
import SlideMovies from './SlideMovies';


const Home = () => {


    return (
        <div className="home">
            <SlideMovies />
            <h2>להזמנת כרטיסים</h2>
            <div className="filters">
                <FiltersCinemas />
                <FiltersDays />
            </div>
            <CinemaShows user='user' />
        </div>
    )
}

export default Home
