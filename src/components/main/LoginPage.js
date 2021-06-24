
import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import { LoginContext } from "../../contexts/loginContext";
import { loginAction } from "../../actions/adminActions";
import { saveUserOnCookie } from '../../cookies/cookies'
import { adminloginToDB } from "../../services/adminService";
import Spinner from "./Spinner";

const LoginPage = () => {
    const { dispatchUserData } = useContext(LoginContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailinputValid, setIsEmailInputValid] = useState(true);
    const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [showSpinner, setShowSpinner] = useState(false);

    const history = useHistory();
    // if (!!userData.token)
    //     history.push('/admin/home')

    const isFormInavlid = () => {
        return email === "" || password === "";
    };

    const onBlurEmailInput = (event) => {
        const theEmail = event.target.value.trim();
        if (theEmail === "") {
            setEmail("");
            setIsEmailInputValid(false);
        } else {
            setEmail(theEmail);
            setIsEmailInputValid(true);
        }
    };

    const onBlurPasswordInput = (event) => {
        const thePassword = event.target.value.trim();
        setPassword(thePassword === "" ? "" : thePassword);
        setIsPasswordInputValid(thePassword !== "");
    };


    const onSubmitform = (event) => {
        event.preventDefault();
        setShowSpinner(true)
        adminloginToDB(email, password).then(
            (response) => {
                setShowSpinner(false)
                if (response.data) {
                    const userData = response.data;
                    saveUserOnCookie(userData)
                    dispatchUserData(loginAction(userData));
                    history.push('/admin/home')
                } else
                    setErrorMessage(response)
            }).catch((err) => {
                setErrorMessage(err.message)
            })
    };


    return (
        <>
            {showSpinner && <Spinner />}
            <div className="login-page">
                <div className="login-page__form">
                    <div className="login-form">
                        <h3>Login</h3>
                        {errorMessage !== "" && <div className="error-message">{errorMessage}</div>}
                        <form onSubmit={onSubmitform}>
                            <input placeholder="Email" onBlur={onBlurEmailInput} />
                            {!isEmailinputValid && <div className="invalid-message">You must enter your email.</div>}
                            <input type="password" placeholder="Password" onBlur={onBlurPasswordInput} />
                            {!isPasswordInputValid && <div className="invalid-message">You must enter your password.</div>}
                            <div className="login-form__nav">
                                <button type="submit" disabled={isFormInavlid()}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;