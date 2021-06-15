import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../contexts/loginContext';
import { editMovieFunc } from '../../services/adminService';
import { getShowByIdFunc } from '../../services/userService';
import Modal from '../main/Modal';
import Spinner from '../main/Spinner';

const EditShowPage = (props) => {
    const showID = props.match.params.id;
    const { userData } = useContext(LoginContext);
    const [show, setShow] = useState({});
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newDuration, setNewDuration] = useState(0);
    const [newImageSrc, setNewImageSrc] = useState('');

    const [updateTitle, setUpdateTitle] = useState(false);
    const [updateDescription, setUpdateDescription] = useState(false);
    const [updateCategory, setUpdateCategory] = useState(false);
    const [updateDuration, setUpdateDuration] = useState(false);
    const [updateImg, setUpdateImg] = useState(false);

    useEffect(() => {
        let isComponentExist = true
        if (isComponentExist) {
            getShowByIdFunc(showID).then((response) => {
                setShow(response)
                console.log(response)
                setIsPageLoaded(true)
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, [showID]);

    const saveUpdates = () => {
        const updatedMovie = {
            title: newTitle.length > 0 ? newTitle : show.movie.title,
            category: newCategory.length > 0 ? newCategory : show.movie.category,
            description: newDescription.length > 0 ? newDescription : show.movie.description,
            duration: newDuration > 0 ? newDuration : show.movie.duration,
            img: newImageSrc.length > 0 ? newImageSrc : show.movie.img
        }
        setIsPageLoaded(false)
        editMovieFunc(userData.token, showID, updatedMovie).then((response) => {
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
                        {showModal && <Modal text="Movie Updated" setShowModal={setShowModal} />}
                        <h2>{show.movie.title} - Show</h2>
                        <div className="admin-movies">
                            <div className="admin-movies-desc">
                                <div className="title">
                                    <span className="label">Title:</span>
                                    <span>{newTitle || show.movie.title}</span>
                                    {updateTitle ?
                                        <div>
                                            <input type="text" placeholder="Change Movie Title" onBlur={(e) => setNewTitle(e.target.value.trim())} />
                                            <button>Update !</button>
                                        </div>
                                        :
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setUpdateTitle(true)
                                        }}>Update</button>
                                    }
                                </div>
                                <div className="description">
                                    <span className="label">Description:</span>
                                    <span>{newDescription || show.movie.description}</span>
                                    {updateDescription ?
                                        <div>
                                            <input type="text" placeholder="Change Movie Description" onBlur={(e) => setNewDescription(e.target.value.trim())} />
                                            <button>Update !</button>
                                        </div>
                                        :
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setUpdateDescription(true)
                                        }}>Update</button>
                                    }
                                </div>
                                <div className="category">
                                    <span className="label">Category:</span>
                                    <span>{newCategory || show.movie.category}</span>
                                    {updateCategory ?
                                        <div>
                                            <input type="text" placeholder="Change Movie Category" onBlur={(e) => setNewCategory(e.target.value.trim())} />
                                            <button>Update !</button>
                                        </div>
                                        :
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setUpdateCategory(true)
                                        }}>Update</button>
                                    }
                                </div>
                                <div className="duration">
                                    <span className="label">Duration:</span>
                                    <span>{newDuration || show.movie.duration} Minutes</span>
                                    {updateDuration ?
                                        <div>
                                            <input type="number" placeholder="Change Movie Duration" onBlur={(e) => setNewDuration(e.target.value)} />
                                            <button>Update !</button>
                                        </div>
                                        :
                                        <button onClick={(e) => {
                                            e.preventDefault()
                                            setUpdateDuration(true)
                                        }}>Update</button>
                                    }
                                </div>
                            </div>
                            <div className="img">
                                <img src={newImageSrc || show.movie.img} alt="Movie" />
                                {updateImg ?
                                    <div>
                                        <input type="text" placeholder="Change Movie Image" onBlur={(e) => setNewImageSrc(e.target.value)} />
                                        <button>Update !</button>
                                    </div>
                                    :
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        setUpdateImg(true)
                                    }}>Update</button>}
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
