import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Spinner from './Spinner';
import { nanoid } from 'nanoid';
import { FiltersContext } from '../../contexts/filtersContext';
import { getAllCinemaShowsFunc } from '../../services/userService';

const CinemaShows = (props) => {
    const history = useHistory();
    const className = props.user === 'admin' ? 'admin-' : ''

    const { filtersData } = useContext(FiltersContext);

    const [showsToDisplay, setShowsToDisplay] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);


    useEffect(() => {
        let isComponentExist = true;
        if (isComponentExist) {
            if (filtersData.cinema !== '') {
                getAllCinemaShowsFunc(filtersData.cinema).then((response) => {
                    const filtered = response.forEach(movieObj => {
                        movieObj[1].filter((show) => {
                            return moment().day(filtersData.day).isSame(moment(show.specificDate), 'day')
                        })
                    })
                    setShowsToDisplay(filtered)
                    setIsDataLoaded(true)
                }).catch((e) => {
                    console.log(e.message)
                })
            }
        }
        return () => {
            isComponentExist = false
        };
    }, [filtersData]);

    const onClickMovie = (show) => {
        if (props.user === 'admin')
            history.push(`/admin/editShow/${show._id}`)
        else {
            history.push(`/movie-page/${show.movie._id}`)
        }
    }
    const onClickShow = (show) => {
        if (props.user === 'admin')
            history.push(`/admin/editShow/${show._id}`)
        else
            history.push(`/selectTickets-page/${show._id}`)
    }

    return (
        <div className="showsSection">
            {
                isDataLoaded ?
                    showsToDisplay.length > 0 ?
                        showsToDisplay.map((show, i) => {
                            if (show.length > 0) {
                                return (
                                    <div className={className + 'show'} key={nanoid()} >
                                        <div className="showImg" onClick={() => onClickMovie(show[i])}>
                                            <img src={show[1][0].movie.img} alt="" />
                                        </div>
                                        <div className="showTextDescription">
                                            <div className="show-title" onClick={() => onClickMovie(show[i])}>
                                                <span>{show[1][0].movie.title}</span>
                                            </div>
                                            <div className="show-duration">
                                                <span>{show[1][0].movie.category}</span>
                                                <span className="divider"></span>
                                                <span>{show[1][0].movie.duration} Min</span>
                                            </div>
                                            <div className="show-times">
                                                {
                                                    show[1].map((exactShow) => (
                                                        <div key={nanoid()} className="show-time" onClick={() => onClickShow(exactShow)}>
                                                            {moment(exactShow.specificDate).format('HH:mm')}
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                            <div className="show-language">
                                                {
                                                    show[1].map((exactShow, i) => {
                                                        if (i === 0) return (
                                                            <span key={nanoid()}>{exactShow.language}</span>
                                                        )
                                                        return <span key={nanoid()}></span>

                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            else
                                return <div key={nanoid()}></div>
                        }) : <div className="show">No Shows in Cinema Yet</div> :
                    <Spinner />
            }</div >
    )
}

export default CinemaShows
