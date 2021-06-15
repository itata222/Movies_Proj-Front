import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import PageNotFound from '../components/main/PageNotFound'
import Home from '../components/main/Home'
import Header from '../components/main/Header'
import MoviePage from '../components/main/MoviePage'
import InCinema from '../components/main/InCinema';
import LoginContextProvider from '../contexts/loginContext';
import MoviesContextProvider from '../contexts/moviesContext';
import ShowsContextProvider from '../contexts/showsContext';
import LoginPage from '../components/admin/LoginPage'
import AdminPage from '../components/admin/AdminPage'
import AdminRoute from './AdminRoute';
import AddMoviePage from '../components/admin/AddMoviePage';
import AddShowPage from '../components/admin/AddShowPage';
import EditMoviePage from '../components/admin/EditMoviePage'
import EditShowPage from '../components/admin/EditShowPage'
import AdminMoviesSelectionPage from '../components/admin/AdminMoviesSelectionPage'
import AdminShowsSelectionPage from '../components/admin/AdminShowsSelectionPage'


const AppRoute = () => {


    return (
        <BrowserRouter>
            <LoginContextProvider>
                <MoviesContextProvider>
                    <ShowsContextProvider>
                        <Header />
                        <Switch>
                            <Route path="/" exact>
                                <Redirect to="/home" />
                            </Route>
                            <Route path="/home" component={Home} />
                            <Route path="/in-cinema" component={InCinema} />
                            <Route path="/movies/:title" component={MoviePage} />
                            <Route path='/admin/login' component={LoginPage} />
                            <AdminRoute path='/admin/home' component={AdminPage} />
                            <AdminRoute path='/admin/addMovieToSystem' component={AddMoviePage} />
                            <AdminRoute path='/admin/addNewShow' component={AddShowPage} />
                            <AdminRoute path='/admin/editMovie/:id' component={EditMoviePage} />
                            <AdminRoute path='/admin/editShow/:id' component={EditShowPage} />
                            <AdminRoute path='/admin/moviesSelectionPage' component={AdminMoviesSelectionPage} />
                            <AdminRoute path='/admin/showsSelectionPage' component={AdminShowsSelectionPage} />
                            <Route path='*' component={PageNotFound} />
                        </Switch>
                    </ShowsContextProvider>
                </MoviesContextProvider>
            </LoginContextProvider>
        </BrowserRouter>
    )
}

export default AppRoute

