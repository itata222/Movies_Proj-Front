import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { LoginContext } from '../../contexts/loginContext';
import { useContext } from 'react';
import Modal from '../main/Modal'
import { addMovieFunc } from '../../services/adminService';
import { addMovieAction } from '../../actions/adminActions';
import { MoviesContext } from '../../contexts/moviesContext';

const AddMoviePage = () => {
    const { userData } = useContext(LoginContext);
    const { dispatchMoviesData } = useContext(MoviesContext);
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState(90);
    const [category, setCategory] = useState('');

    const onBlurTitle = (e) => {
        const theTitle = e.target.value.trim();
        setTitle(theTitle);
    }
    const onBlurDescription = (e) => {
        const theDescription = e.target.value.trim();
        setDescription(theDescription);
    }
    const onBlurDuration = (e) => {
        const theDuration = e.target.value.trim();
        setDuration(theDuration);
    }
    const onBlurCategory = (e) => {
        const theCategory = e.target.value.trim();
        setCategory(theCategory)
    }


    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
            fontFamily: `'Poppins', sans-serif`
        },
    }));

    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
        const newMovie = { title, description, duration, category };
        addMovieFunc(userData.token, newMovie).then((response) => {
            dispatchMoviesData(addMovieAction(response))
            console.log(response);
            setShowModal(true);
        }).catch((e) => {
            console.log(e)
        })
    }

    return (

        <div className="professorAddCourse">
            {showModal && <Modal setShowModal={setShowModal} text="Movie Added !" />}
            <div className="addCourseContainer">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" className="addCourseHeader">
                            Add Movie
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={onSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="title"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="title"
                                        label="Title"
                                        autoFocus
                                        onBlur={onBlurTitle}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        variant="outlined"
                                        multiline
                                        rows={4}
                                        required
                                        fullWidth
                                        id="description"
                                        label="Description"
                                        name="description"
                                        autoComplete="lname"
                                        onBlur={onBlurDescription}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="number"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="duration"
                                        label="Duration in minutes"
                                        name="duration"
                                        autoComplete="lname"
                                        onBlur={onBlurDuration}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="category"
                                        label="Category"
                                        name="category"
                                        autoComplete="lname"
                                        onBlur={onBlurCategory}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Add Movie
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AddMoviePage;

