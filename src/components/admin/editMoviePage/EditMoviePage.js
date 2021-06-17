import React, { useContext, useEffect, useState } from 'react'
import { LoginContext } from '../../../contexts/loginContext';
import { editMovieFunc } from '../../../services/adminService';
import { getMovieByIdFunc } from '../../../services/userService';
import Modal from '../../main/Modal';
import Spinner from '../../main/Spinner';
import CategorySection from './CategorySection';
import DescriptionSection from './DescriptionSection';
import DurationSection from './DurationSection';
import ImgSection from './ImgSection';
import TitleSection from './TitleSection';

const EditMoviePage = (props) => {
    const movieID = props.match.params.id;
    const { userData } = useContext(LoginContext);
    const [movie, setMovie] = useState({});
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [newDuration, setNewDuration] = useState(0);
    const [newImageSrc, setNewImageSrc] = useState('');


    useEffect(() => {
        let isComponentExist = true
        if (isComponentExist) {
            getMovieByIdFunc(movieID).then((response) => {
                setMovie(response)
                setIsPageLoaded(true)
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, [movieID]);

    const saveUpdates = () => {
        const updatedMovie = {
            title: newTitle.length > 0 ? newTitle : movie.title,
            category: newCategory.length > 0 ? newCategory : movie.category,
            description: newDescription.length > 0 ? newDescription : movie.description,
            duration: newDuration > 0 ? newDuration : movie.duration,
            img: newImageSrc.length > 0 ? newImageSrc : movie.img
        }
        setIsPageLoaded(false)
        editMovieFunc(userData.token, movieID, updatedMovie).then((response) => {
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
                        <h2>{movie.title} - Movie</h2>
                        <div className="admin-movies">
                            <div className="admin-movies-desc">
                                <TitleSection movie={movie} title={{ newTitle, setNewTitle }} />
                                <DescriptionSection movie={movie} description={{ newDescription, setNewDescription }} />
                                <CategorySection movie={movie} category={{ newCategory, setNewCategory }} />
                                <DurationSection movie={movie} duration={{ newDuration, setNewDuration }} />
                            </div>
                            <ImgSection movie={movie} img={{ newImageSrc, setNewImageSrc }} />
                        </div>
                        <button onClick={saveUpdates}>Save Changes</button>
                    </div> :
                    <Spinner />
            }
        </>
    )
}

export default EditMoviePage
