import { Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import PageNotFound from '../components/main/PageNotFound'
import Header from '../components/main/Header'
import LoginContextProvider from '../contexts/loginContext';
import MoviesContextProvider from '../contexts/moviesContext';
import ShowsContextProvider from '../contexts/showsContext';
import LoginPage from '../components/main/LoginPage'
import AdminPage from '../components/admin/AdminPage'
import AdminRoute from './AdminRoute';
import AddMoviePage from '../components/admin/addMoviePage/AddMoviePage';
import AddShowPage from '../components/admin/addShowPage/AddShowPage';
import EditMoviePage from '../components/admin/editMoviePage/EditMoviePage'
import AdminMoviesSelectionPage from '../components/admin/MoviesSelectionPage'
import AdminShowsSelectionPage from '../components/admin/ShowsSelectionPage'
import CinemasContextProvider from '../contexts/cinemasContext'
import FiltersContextProvider from '../contexts/filtersContext'
import ShowPage from '../components/showPage/ShowPage'
import ReservationContextProvider from '../contexts/reservationContext'
import PayPage from '../components/payPage/PayPage'
import NonAdminRoute from './NonAdminRoute'
import Home from '../components/home/Home'
import InCinema from '../components/inCinemaPage/InCinema'
import MoviePage from '../components/moviePage/MoviePage'
import EditShowPage from '../components/admin/editShowPage/EditShowPage'


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
                                        <Route path='/movie-page/:id' component={MoviePage} />
                                        <Route path='/show-page/:id' component={ShowPage} />
                                        <Route path='/pay-page/:id' component={PayPage} />
                                        <Route path='/admin' exact>
                                            <Redirect to="/login" component={LoginPage} />
                                        </Route>
                                        <NonAdminRoute path='/login' component={LoginPage} />
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

