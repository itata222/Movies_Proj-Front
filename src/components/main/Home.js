import React from 'react';
import FiltersCinemas from './FiltersCinemas';
import SlideMovies from './SlideMovies';


const Home = () => {


    return (
        <div className="home">
            <SlideMovies />
            <FiltersCinemas />
        </div>
    )
}

export default Home
