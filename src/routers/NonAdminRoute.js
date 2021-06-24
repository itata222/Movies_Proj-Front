import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from '../contexts/loginContext'


const NonAdminRoute = ({ component: Component, ...rest }) => {
    const { userData } = useContext(LoginContext);

    return (
        <Route
            {...rest}
            component={(props) => (
                !!userData.token ?
                    <Redirect to={{ pathname: "/admin/home" }} /> :
                    <Component {...props} />

            )}
        />);
};

export default NonAdminRoute;