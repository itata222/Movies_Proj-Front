import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import Modal from '../../main/Modal'
import Form from './Form';

const AddMoviePage = () => {
    const [showModal, setShowModal] = useState(false);

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
            fontFamily: `'Poppins', sans-serif`,
            backgroundColor: '#F5821E'
        },
    }));

    const classes = useStyles();

    return (
        <div className="addMovie">
            {showModal && <Modal setShowModal={setShowModal} text="Movie Added !" />}
            <div className="addMovieContainer">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography component="h1" variant="h5" className="addCourseHeader">  Add Movie </Typography>
                        <Form classes={classes} setShowModal={setShowModal} />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default AddMoviePage;

