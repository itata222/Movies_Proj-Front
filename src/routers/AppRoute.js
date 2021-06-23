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
import AddMoviePage from '../components/admin/addMoviePage/AddMoviePage';
import AddShowPage from '../components/admin/addShowPage/AddShowPage';
import EditMoviePage from '../components/admin/editMoviePage/EditMoviePage'
import EditShowPage from '../components/admin/EditShowPage'
import AdminMoviesSelectionPage from '../components/admin/AdminMoviesSelectionPage'
import AdminShowsSelectionPage from '../components/admin/AdminShowsSelectionPage'
import CinemasContextProvider from '../contexts/cinemasContext'
import FiltersContextProvider from '../contexts/filtersContext'
import ShowPage from '../components/main/showPage/ShowPage'
import ReservationContextProvider from '../contexts/reservationContext'
import PayPage from '../components/main/PayPage'


const AppRoute = () => {


    return (
        <BrowserRouter>
            <LoginContextProvider>
                <MoviesContextProvider>
                    <ShowsContextProvider>
                        <CinemasContextProvider>
                            <FiltersContextProvider >
                                <ReservationContextProvider>
                                    <Header />
                                    <Switch>
                                        <Route path="/" exact>
                                            <Redirect to="/home" />
                                        </Route>
                                        <Route path="/home" component={Home} />
                                        <Route path="/in-cinema" component={InCinema} />
                                        <Route path="/movies/:title" component={MoviePage} />
                                        <Route path='/login' component={LoginPage} />
                                        <Route path='/movie-page/:id' component={MoviePage} />
                                        <Route path='/show-page/:id' component={ShowPage} />
                                        <Route path='/pay-page/:id' component={PayPage} />
                                        <AdminRoute path='/admin/home' component={AdminPage} />
                                        <AdminRoute path='/admin/addMovieToSystem' component={AddMoviePage} />
                                        <AdminRoute path='/admin/addNewShow' component={AddShowPage} />
                                        <AdminRoute path='/admin/editMovie/:id' component={EditMoviePage} />
                                        <AdminRoute path='/admin/editShow/:id' component={EditShowPage} />
                                        <AdminRoute path='/admin/moviesSelectionPage' component={AdminMoviesSelectionPage} />
                                        <AdminRoute path='/admin/showsSelectionPage' component={AdminShowsSelectionPage} />
                                        <Route path='*' component={PageNotFound} />
                                    </Switch>
                                </ReservationContextProvider>
                            </FiltersContextProvider>
                        </CinemasContextProvider>
                    </ShowsContextProvider>
                </MoviesContextProvider>
            </LoginContextProvider>
        </BrowserRouter>
    )
}

export default AppRoute

