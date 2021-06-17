import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { logoutAction } from '../../actions/loginActions';
import { LoginContext } from '../../contexts/loginContext';
import { deleteUserFromCookie } from '../../cookies/cookies';
import { adminlogoutFromDB } from '../../services/adminService';

const Header = () => {
    const { userData, dispatchUserData } = useContext(LoginContext);
    const history = useHistory()
    const onClickLogout = () => {
        adminlogoutFromDB(userData.token).then((res) => {
            dispatchUserData(logoutAction());
            deleteUserFromCookie();
            history.push("/home");
        }).catch(e => console.log(e))
    }
    return (
        <>
            <div className="header">
                <NavLink to={!!userData?.token ? "/admin/home" : "/home"}>
                    <img src="https://www.yesplanet.co.il/xmedia/img/10100/logo.svg" alt="Yes Planet logo" />
                </NavLink>
                {!!userData?.token &&
                    <div className="logout" onClick={onClickLogout}>Logout</div>
                }
            </div>
            <div className="sub-header">
                {
                    !!userData?.token ?
                        <>
                            <NavLink activeClassName="activeClassName" to="/admin/addNewShow">הוספת הקרנה</NavLink>
                            <NavLink activeClassName="activeClassName" to="/admin/addMovieToSystem">הוספת סרט</NavLink>
                            <NavLink activeClassName="activeClassName" to="/admin/moviesSelectionPage">עריכת סרט</NavLink>
                            <NavLink activeClassName="activeClassName" to="/admin/showsSelectionPage">עריכת הקרנה</NavLink>
                        </> :
                        <>   <NavLink activeClassName="activeClassName" to="/in-cinema">מה בקולנוע</NavLink>
                            <NavLink activeClassName="activeClassName" to="/login">כניסה כמנהל</NavLink>
                        </>
                }

            </div>
        </>
    )
}

export default Header
