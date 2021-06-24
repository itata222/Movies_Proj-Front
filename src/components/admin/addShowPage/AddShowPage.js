import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import { LoginContext } from '../../../contexts/loginContext';
import { useContext } from 'react';
import Modal from '../../main/Modal';
import { addShowFunc } from '../../../services/adminService';
import { MoviesContext } from '../../../contexts/moviesContext';
import { addShowAction, setCinemasAction, setMoviesAction } from '../../../actions/adminActions';
import Spinner from '../../main/Spinner'
import { getAllCinemasFunc, getAllMoviesFunc } from '../../../services/userService';
import { ShowsContext } from '../../../contexts/showsContext';
import { CinemasContext } from '../../../contexts/cinemasContext'

const AddShowPage = () => {
    const { userData } = useContext(LoginContext);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const { moviesData, dispatchMoviesData } = useContext(MoviesContext);
    const { cinemasData, dispatchCinemasData } = useContext(CinemasContext);
    const { dispatchShowsData } = useContext(ShowsContext);
    const [showModal, setShowModal] = useState(false);
    const [selectedCinema, setSelectedCinema] = useState({});
    const [selectedCinemaTitle, setSelectedCinemaTitle] = useState('');
    const [selectedMovie, setSelectedMovie] = useState({});
    const [selectedMovieTitle, setSelectedMovieTitle] = useState('');
    const [language, setLanguage] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);
    const [specificDate, setSpecificDate] = useState(null);

    useEffect(() => {
        let isComponentExist = true;
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
            getAllCinemasFunc().then((response) => {
                if (response) {
                    dispatchCinemasData(setCinemasAction(response));
                    setIsPageLoaded(true)
                }
                else
                    alert(response)
            }).catch((e) => {
                console.log(e)
            })

        }
        return () => {
            isComponentExist = false;
        };
    }, [userData.token, dispatchMoviesData, dispatchCinemasData]);

    const onBlurLanguage = (e) => {
        const theLanguage = e.target.value.trim();
        setLanguage(theLanguage);
    }
    const onBlurSpecificDate = (e) => {
        const theSpecificDate = e.target.value;
        setSpecificDate(theSpecificDate);
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
            margin: theme.spacing(3, 2, 2),
            fontFamily: `'Poppins', sans-serif`,
            backgroundColor: '#F5821E'
        },
    }));

    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
        setShowSpinner(true)
        const newShow = { cinema: selectedCinema, movie: selectedMovie, language, specificDate, seats: [] };
        addShowFunc(userData.token, newShow).then((response) => {
            dispatchShowsData(addShowAction(response))
            setShowSpinner(false)
            setShowModal(true);
        }).catch((e) => {
            setShowSpinner(false)
            console.log(e)
        })
    }

    return (

        <div className="addShow">
            {!isPageLoaded && <Spinner />}
            {showSpinner && <Spinner />}
            {showModal && <Modal setShowModal={setShowModal} text="Show Added !" />}
            <div className="addShowContainer">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" className="addCourseHeader">
                            Add Show
                        </Typography>
                        <form className={classes.form} noValidate onSubmit={onSubmit}>
                            <div className="all-cinemas">
                                <div className="label">Cinemas</div>
                                {
                                    cinemasData?.length > 0 ?
                                        cinemasData.map((cinema, i) => (
                                            <div key={i} className="cinema" onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedCinemaTitle(cinema.title)
                                                setSelectedCinema(cinema)
                                            }}>
                                                {cinema.title}
                                            </div>
                                        )) :
                                        <div>No Cinemas Yet!</div>
                                }
                            </div>
                            <div className="all-movies">
                                <div className="label">Current Movies</div>
                                {
                                    moviesData?.length > 0 ?
                                        moviesData.map((movie, i) => (
                                            <div key={i} className="movie" onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedMovieTitle(movie.title)
                                                setSelectedMovie(movie)
                                            }}>
                                                {movie.title}
                                            </div>
                                        )) :
                                        <div>No Movies Yet!</div>
                                }
                            </div>
                            <Grid container spacing={2} className="gridContainer">
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        id="cinema"
                                        label="Cinema"
                                        name="cinema"
                                        value={selectedCinemaTitle}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        variant="outlined"
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        fullWidth
                                        id="movie"
                                        label="Movie"
                                        name="movie"
                                        value={selectedMovieTitle}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="language"
                                        label="Language"
                                        name="language"
                                        autoComplete="lname"
                                        onBlur={onBlurLanguage}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <TextField
                                        type="datetime-local"
                                        min='2021-05-15T00:01'
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="specificDate"
                                        // label="SpecificDate"
                                        name="specificDate"
                                        autoComplete="lname"
                                        onBlur={onBlurSpecificDate}
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
                                Add Show
                            </Button>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AddShowPage;

