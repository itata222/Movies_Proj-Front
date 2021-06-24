import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/loginContext';
import CinemaShows from './CinemaShows';
import FiltersHome from '../filters/FiltersHome';
import SlideMovies from './SlideMovies';


const Home = () => {
    const { userData } = useContext(LoginContext)

    return (
        <div className="home">
            <SlideMovies />
            <h2>להזמנת כרטיסים</h2>
            <div className="filters">
                <FiltersHome />
            </div>
            <CinemaShows user={userData.admin ? 'admin' : 'user'} />
        </div>
    )
}

export default Home
