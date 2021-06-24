import React, { useState } from 'react'

const PaymentDetails = ({ setPaymentDetails, paymentDetails }) => {
    const [isCardTypeinputValid, setIsCardTypeInputValid] = useState(true);
    const [isCardNumberinputValid, setIsCardNumberInputValid] = useState(true);
    const [isCardExpiresInputValid, setIsCardExpiresInputValid] = useState(true);
    const [isIDinputValid, setIsIDInputValid] = useState(true);
    const [isLast3DigitsInputValid, setIsLast3DigitsInputValid] = useState(true);

    const onBlurCardType = (e) => {
        const cardType = e.target.value.trim();
        cardType.length > 0 ? setIsCardTypeInputValid(true) : setIsCardTypeInputValid(false)
        setPaymentDetails({ ...paymentDetails, cardType })
    }
    const onBlurCardNumber = (e) => {
        const cardNumber = e.target.value.trim();
        cardNumber.length === 1 ? setIsCardNumberInputValid(true) : setIsCardNumberInputValid(false)
        setPaymentDetails({ ...paymentDetails, cardNumber })
    }
    const onBlurCardExpires = (e) => {
        const cardExpires = e.target.value.trim();
        cardExpires.length > 0 ? setIsCardExpiresInputValid(true) : setIsCardExpiresInputValid(false)
        setPaymentDetails({ ...paymentDetails, cardExpires })
    }
    const onBlurID = (e) => {
        const id = e.target.value.trim();
        id.length > 0 ? setIsIDInputValid(true) : setIsIDInputValid(false)
        setPaymentDetails({ ...paymentDetails, id })
    }
    const onBlur3LastChars = (e) => {
        const last3 = e.target.value.trim();
        last3.length === 3 ? setIsLast3DigitsInputValid(true) : setIsLast3DigitsInputValid(false)
        setPaymentDetails({ ...paymentDetails, last3 })
    }

    return (
        <div className="paymentDetails">
            <h2>פרטי תשלום</h2>
            <form>
                <div className="payForm-input">
                    <label>סוג כרטיס</label>
                    <input type="text" placeholder="סוג כרטיס" onBlur={onBlurCardType} />
                    {!isCardTypeinputValid && <div className="invalid-message">You must enter a card type</div>}
                </div>
                <div className="payForm-input">
                    <label>מספר כרטיס</label>
                    <input type="text" placeholder="מספר כרטיס " onBlur={onBlurCardNumber} />
                    {!isCardNumberinputValid && <div className="invalid-message">You must enter a correct card number</div>}
                </div>
                <div className="payForm-input">
                    <label>תוקף כרטיס</label>
                    <input type="text" placeholder="תוקף כרטיס" onBlur={onBlurCardExpires} />
                    {!isCardExpiresInputValid && <div className="invalid-message">You must enter a correct card's expires date</div>}
                </div>
                <div className="payForm-input">
                    <label>תעודת זהות</label>
                    <input type="text" placeholder="תעודת זהות" onBlur={onBlurID} />
                    {!isIDinputValid && <div className="invalid-message">You must enter your ID</div>}
                </div>
                <div className="payForm-input">
                    <label>3 ספרות אחרונות על גב הכרטיס</label>
                    <input type="text" placeholder="3 ספרות אחרונות על גב הכרטיס" onBlur={onBlur3LastChars} />
                    {!isLast3DigitsInputValid && <div className="invalid-message">You must enter card's last 3 digits</div>}
                </div>
            </form>
        </div>
    )
}

export default PaymentDetails
