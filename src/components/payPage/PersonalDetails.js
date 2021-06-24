import React, { useState } from 'react'

const PersonalDetails = ({ setPersonalDetails, personalDetails }) => {

    const [isEmailinputValid, setIsEmailInputValid] = useState(true);
    const [isConfirmEmailinputValid, setIsConfirmEmailInputValid] = useState(true);
    const [isPhoneInputValid, setIsPhoneInputValid] = useState(true);
    const [isNameinputValid, setIsNameInputValid] = useState(true);
    const [isSurNameInputValid, setIsSurNameInputValid] = useState(true);

    const onBlurName = (e) => {
        const name = e.target.value.trim();
        name.length > 0 ? setIsNameInputValid(true) : setIsNameInputValid(false)
        setPersonalDetails({ ...personalDetails, name })
    }
    const onBlurSurname = (e) => {
        const surName = e.target.value.trim();
        surName.length > 0 ? setIsSurNameInputValid(true) : setIsSurNameInputValid(false)
        setPersonalDetails({ ...personalDetails, surName })
    }
    const onBlurEmail = (e) => {
        const email = e.target.value.trim();
        email.length > 0 ? setIsEmailInputValid(true) : setIsEmailInputValid(false)
        setPersonalDetails({ ...personalDetails, email })
    }
    const onBlurConfirmEmail = (e) => {
        const confirmationEmail = e.target.value.trim();
        confirmationEmail === personalDetails.email ? setIsConfirmEmailInputValid(true) : setIsConfirmEmailInputValid(false)
    }
    const onBlurPhone = (e) => {
        const phone = e.target.value.trim();
        phone.length > 6 ? setIsPhoneInputValid(true) : setIsPhoneInputValid(false)
        setPersonalDetails({ ...personalDetails, phone })

    }
    return (
        <div className="personalDetails">
            <h2>פרטים אישיים</h2>
            <form>
                <div className="payForm-input">
                    <label>שם פרטי</label>
                    <input type="text" placeholder="שם פרטי" onBlur={onBlurName} />
                    {!isNameinputValid && <div className="invalid-message">You must enter your name</div>}
                </div>
                <div className="payForm-input">
                    <label>שם משפחה</label>
                    <input type="text" placeholder="שם משפחה" onBlur={onBlurSurname} />
                    {!isSurNameInputValid && <div className="invalid-message">You must enter your surname</div>}
                </div>
                <div className="payForm-input">
                    <label>דואר אלקטרוני</label>
                    <input type="text" placeholder="דואר אלקטרוני" onBlur={onBlurEmail} />
                    {!isEmailinputValid && <div className="invalid-message">You must enter your Email</div>}
                </div>
                <div className="payForm-input">
                    <label>אנא הזינו שוב דואר אלקטרוני</label>
                    <input type="text" placeholder="אנא הזינו שוב דואר אלקטרוני" onBlur={onBlurConfirmEmail} />
                    {!isConfirmEmailinputValid && <div className="invalid-message">No match</div>}
                </div>
                <div className="payForm-input">
                    <label>טלפון סלולרי</label>
                    <input type="text" placeholder="טלפון סלולרי" onBlur={onBlurPhone} />
                    {!isPhoneInputValid && <div className="invalid-message">You must enter your Phone Number</div>}
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails
