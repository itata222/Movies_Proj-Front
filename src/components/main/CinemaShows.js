import React, { useEffect, useContext, useState } from 'react';
import { SelectedItemsContext } from '../../contexts/selectedItemsContext';
import { getAllCinemasFunc, getAllCinemaShowsFunc } from '../../services/userService';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Spinner from './Spinner';
import { CinemasContext } from '../../contexts/cinemasContext';
import { setCinemasAction } from '../../actions/adminActions';
import { setSelectedCinemaAction, setSelectedMovieAction } from '../../actions/selectedItemsActions';


const CinemaShows = (props) => {
    const history = useHistory();
    const className = props.user === 'admin' ? 'admin-' : ''
    const { selectedItemsData, dispatchSelectedItemsData } = useContext(SelectedItemsContext);
    const { cinemasData, dispatchCinemasData } = useContext(CinemasContext)
    const [cinemaShows, setCinemaShows] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);


    const onClickMovie = (show) => {
        console.log(show.movie)
        if (props.user === 'admin')
            history.push(`/admin/editShow/${show._id}`)
        else {
            dispatchSelectedItemsData(setSelectedMovieAction(show.movie))
            history.push(`/movie-page/${show.movie._id}`)
        }
    }
    const onClickShow = (show) => {
        if (props.user === 'admin')
            history.push(`/admin/editShow/${show._id}`)
        else
            history.push(`/selectTickets-page/${show._id}`)
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
                (isDataLoaded && cinemaShows) ?
                    cinemaShows.length > 0 ?
                        cinemaShows.map((show, i) => {
                            return (
                                <div className={className + 'show'} key={i} >
                                    <div className="showImg" onClick={() => onClickMovie(show[1][0])}>
                                        <img src={show[1][0].movie.img} alt="" />
                                    </div>
                                    <div className="showTextDescription">
                                        <div className="show-title" onClick={() => onClickMovie(show[1][0])}>
                                            <span>{show[1][0].movie.title}</span>
                                        </div>
                                        <div className="show-duration">
                                            <span>{show[1][0].movie.category}</span>
                                            <span className="divider"></span>
                                            <span>{show[1][0].movie.duration} Min</span>
                                        </div>
                                        <div className="show-times">
                                            {
                                                show[1].map((exactShow, i) => (
                                                    <div key={i} className="show-time" onClick={() => onClickShow(exactShow)}>
                                                        {moment(exactShow.specificDate).format('HH:mm')}
                                                    </div>
                                                ))
                                            }

                                        </div>
                                        <div className="show-language">
                                            <span>{show[1][0].language}</span>
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
