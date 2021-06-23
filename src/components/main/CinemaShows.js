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
        getAllCinemaShowsFunc(filtersData.cinema).then((response) => {
            const filtered = response.map(movieObj => {
                return movieObj[1].filter((show) => {
                    return moment().add(filtersData.day, 'days').isSame(moment(show.specificDate), 'day')
                })
            })
            setShowsToDisplay(filtered)
            setIsDataLoaded(true)
        }).catch((e) => {
            console.log(e.message)
        })
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
            history.push(`/show-page/${show._id}`)
    }

    const showNoCinemas = (number) => {
        if (number === 0)
            return <div key={nanoid()} className="show">No Shows in Cinema Yet</div>
    }

    return (
        <div className="showsSection">
            {
                isDataLoaded ?
                    showsToDisplay.length > 0 ?
                        showsToDisplay.map((show, i) => {
                            if (show.length > 0)
                                return (
                                    <div className={className + 'show'} key={nanoid()} >
                                        <div className="showImg" onClick={() => onClickMovie(showsToDisplay[i][0])}>
                                            <img src={show[0].movie.img} alt="" />
                                        </div>
                                        <div className="showTextDescription">
                                            <div className="show-title" onClick={() => onClickMovie(showsToDisplay[i][0])}>
                                                <span>{show[0].movie.title}</span>
                                            </div>
                                            <div className="show-duration">
                                                <span>{show[0].movie.category}</span>
                                                <span className="divider"></span>
                                                <span>{show[0].movie.duration} Min</span>
                                            </div>
                                            <div className="show-times">
                                                {
                                                    show.map((exactShow) => (
                                                        <div key={nanoid()} className="show-time" onClick={() => onClickShow(exactShow)}>
                                                            {moment(exactShow.specificDate).format('HH:mm')}
                                                        </div>
                                                    ))
                                                }

                                            </div>
                                            <div className="show-language">
                                                {
                                                    show.map((exactShow, i) => {
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
                            else
                                return showNoCinemas(i)
                        }) : showNoCinemas(0) :
                    <Spinner />
            }</div >
    )
}

export default CinemaShows
