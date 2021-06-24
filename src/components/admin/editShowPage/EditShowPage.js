import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react'
import { setMoviesAction } from '../../../actions/adminActions';
import { LoginContext } from '../../../contexts/loginContext';
import { MoviesContext } from '../../../contexts/moviesContext';
import { editShowFunc } from '../../../services/adminService';
import { getAllMoviesFunc, getShowByIdFunc } from '../../../services/userService';
import Modal from '../../main/Modal';
import Spinner from '../../main/Spinner';

const EditShowPage = (props) => {
    const showID = props.match.params.id;
    const { userData } = useContext(LoginContext);
    const [show, setShow] = useState({});
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { moviesData, dispatchMoviesData } = useContext(MoviesContext);

    const [newMovie, setNewMovie] = useState({});
    const [newLanguage, setNewLanguage] = useState('');
    const [newSpecificDate, setNewSpecificDate] = useState(null);

    const [updateMovie, setUpdateMovie] = useState(false);
    const [updateLanguage, setUpdateLanguage] = useState(false);
    const [updateSpecificDate, setUpdateSpecificDate] = useState(false);

    useEffect(() => {
        let isComponentExist = true
        if (isComponentExist) {
            getAllMoviesFunc().then((response) => {
                if (response) {
                    dispatchMoviesData(setMoviesAction(response));
                }
                else
                    alert(response)
            }).catch((e) => {
                console.log(e)
            })
            getShowByIdFunc(showID).then((response) => {
                setShow(response)
                setIsPageLoaded(true)
            }).catch(e => console.log(e.message))
        }
        return () => {
            isComponentExist = false;
        };
    }, [showID, dispatchMoviesData]);

    const saveUpdates = () => {
        const updatedShow = {
            movie: !!newMovie?.id ? newMovie : show.movie,
            language: newLanguage.length > 0 ? newLanguage : show.language,
            specificDate: !!newSpecificDate ? String(newSpecificDate) : show.specificDate,
            img: show.movie.img
        }
        setIsPageLoaded(false)
        editShowFunc(userData.token, showID, updatedShow).then((response) => {
            setShowModal(true)
            setIsPageLoaded(true)
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <>
            {
                isPageLoaded ?
                    <div className="admin-movie-page">
                        {showModal && <Modal text="Show Updated" setShowModal={setShowModal} />}
                        <h2>{show.movie.title} - {moment(show.specificDate).format("dddd, MMMM Do, h:mm a")}</h2>
                        <div className="admin-movies">
                            <div className="admin-movies-desc">
                                <div className="Movie">
                                    <div className="dataFlex">
                                        <span className="label">:Movie</span>
                                        <span>{newMovie.title || show.movie.title}</span>
                                    </div>
                                    {updateMovie ?
                                        moviesData?.length > 0 ?
                                            moviesData.map((movie, i) => (
                                                <div key={i} className="movie-show" onClick={(e) => {
                                                    e.preventDefault();
                                                    setNewMovie(movie)
                                                }}>
                                                    {movie.title}
                                                </div>
                                            )) :
                                            <div>No Movies Yet!</div>
                                        :
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setUpdateMovie(true)
                                        }}>Update</button>
                                    }
                                </div>
                                <div className="Language">
                                    <div className="dataFlex">
                                        <span className="label">:Language</span>
                                        <span>{newLanguage || show.language}</span>
                                    </div>

                                    {updateLanguage ?
                                        <div className="updateInput">
                                            <input type="text" placeholder="Change Movie Language" onBlur={(e) => setNewLanguage(e.target.value.trim())} />
                                        </div>
                                        :
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setUpdateLanguage(true)
                                        }}>Update</button>
                                    }
                                </div>

                                <div className="specificDate">
                                    <div className="dataFlex">
                                        <span className="label">:SpecificDate</span>
                                        <span>{moment(show.specificDate).format("dddd, MMMM Do, h:mm a")} </span>
                                    </div>

                                    {updateSpecificDate ?
                                        <div className="updateInput">
                                            <input type="datetime-local" placeholder="Change Movie specific Date" onChange={(e) => {
                                                setNewSpecificDate(e.target.value)
                                            }} />
                                        </div>
                                        :
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setUpdateSpecificDate(true)
                                        }}>Update</button>
                                    }
                                </div>
                            </div>
                            <div className="img">
                                <img src={show.movie.img} alt="Movie" />
                            </div>
                        </div>
                        <button onClick={saveUpdates}>Save Changes</button>
                    </div> :
                    <Spinner />
            }
        </>
    )
}

export default EditShowPage
