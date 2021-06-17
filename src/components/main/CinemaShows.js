import React, { useEffect, useContext, useState } from 'react';
import { SelectedItemsContext } from '../../contexts/selectedItemsContext';
import { getAllCinemasFunc, getAllCinemaShowsFunc } from '../../services/userService';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Spinner from './Spinner';
import { CinemasContext } from '../../contexts/cinemasContext';
import { setCinemasAction } from '../../actions/adminActions';
import { setSelectedCinemaAction } from '../../actions/selectedItemsActions';


const CinemaShows = (props) => {
    const history = useHistory();
    const className = props.user === 'admin' ? 'admin-' : ''
    const { selectedItemsData, dispatchSelectedItemsData } = useContext(SelectedItemsContext);
    const { cinemasData, dispatchCinemasData } = useContext(CinemasContext)
    const [cinemaShows, setCinemaShows] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);


    const onClickMovie = (show) => {
        if (props.user === 'admin')
            history.push(`/admin/editShow/${show._id}`)
        else
            history.push(`/movie-page/${show.movie._id}`)
    }
    const onClickShow = (show) => {
        if (props.user === 'admin')
            history.push(`/admin/editShow/${show._id}`)
        else
            history.push(`/selectTickets-page/${show.movie._id}`)
    }

    useEffect(() => {
        let isComponentExist = true;
        if (isComponentExist) {
            if (selectedItemsData.cinema == null) {
                !!cinemasData ?
                    getAllCinemasFunc().then((res) => {
                        dispatchCinemasData(setCinemasAction(res))
                        dispatchSelectedItemsData(setSelectedCinemaAction(res[0]))
                        getAllCinemaShowsFunc(res[0].title).then((response) => {
                            setIsDataLoaded(true)
                            setCinemaShows(response)
                        }).catch((e) => {
                            console.log(e.message)
                        })
                        setIsDataLoaded(true)
                    }) :
                    dispatchSelectedItemsData(cinemasData[0])
            }
            else
                getAllCinemaShowsFunc(selectedItemsData.cinema.title).then((response) => {
                    setIsDataLoaded(true)
                    setCinemaShows(response)
                }).catch((e) => {
                    console.log(e.message)
                })
        }
        return () => {
            isComponentExist = false;
        };
    }, [dispatchCinemasData, cinemasData, dispatchSelectedItemsData, selectedItemsData.cinema]);

    return (
        <div className="showsSection">
            {
                (isDataLoaded && cinemaShows.shows) ?
                    cinemaShows.shows.length > 0 ?
                        cinemaShows.shows.map((show, i) => {

                            return (
                                <div className={className + 'show'} key={i} >
                                    <div className="showImg" onClick={() => onClickMovie(show.show)}>
                                        <img src={show.show.movie.img} alt="" />
                                    </div>
                                    <div className="showTextDescription">
                                        <div className="show-title" onClick={() => onClickMovie(show.show)}>
                                            <span>{show.show.movie.title}</span>
                                        </div>
                                        <div className="show-duration">
                                            <span>{show.show.movie.category}</span>
                                            <span className="divider"></span>
                                            <span>{show.show.movie.duration} Min</span>
                                        </div>
                                        <div className="show-times">
                                            <div className="show-time" onClick={() => onClickShow(show.show)}>
                                                {moment(show.specificDate).format('HH:mm')}
                                            </div>
                                        </div>
                                        <div className="show-language">
                                            <span>{show.show.language}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div className="show">No Shows in Cinema Yet</div> :
                    <Spinner />
            }</div >
    )
}

export default CinemaShows
