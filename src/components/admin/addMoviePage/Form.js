import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TitleInForm from './TitleInForm';
import DescriptionInForm from './DescriptionInForm';
import DurationInForm from './DurationInForm';
import CategoryInForm from './CategoryInForm';
import ImgInForm from './ImgInForm';
import SubmitButton from './SubmitButton';
import { LoginContext } from '../../../contexts/loginContext';
import { MoviesContext } from '../../../contexts/moviesContext';
import { addMovieFunc } from '../../../services/adminService';
import { addMovieAction } from '../../../actions/adminActions';



const Form = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(90);
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const { userData } = useContext(LoginContext);
    const { dispatchMoviesData } = useContext(MoviesContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const newMovie = { title, description, duration, category, img };
        addMovieFunc(userData.token, newMovie).then((response) => {
            dispatchMoviesData(addMovieAction(response))
            props.setShowModal(true);
        }).catch((e) => {
            console.log(e)
        })
    }

    return (
        <form className={props.classes.form} noValidate onSubmit={onSubmit}>
            <Grid container spacing={2} className="gridContainer">
                <Grid item xs={12} sm={8}>
                    <TitleInForm setTitle={setTitle} />
                </Grid>
                <Grid item xs={12} sm={12}>
                    <DescriptionInForm setDescription={setDescription} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <DurationInForm setDuration={setDuration} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <CategoryInForm setCategory={setCategory} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImgInForm setImg={setImg} />
                </Grid>
            </Grid>
            <SubmitButton classes={props.classes} />
        </form>
    )
}

export default Form
