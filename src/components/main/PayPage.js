import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { ReservationContext } from '../../contexts/reservationContext';
import { takeSeatsFunc } from '../../services/userService';
import Modal from './Modal';
import { nanoid } from 'nanoid'

const PayPage = (props) => {
    const showID = props.match.params.id;
    const { reservationData } = useContext(ReservationContext);
    const [showModal, setShowModal] = useState(false);

    const onSubmitpPay = (e) => {
        e.preventDefault();
        takeSeatsFunc(showID, reservationData.seats).then((res) => {
            console.log(res)
            setShowModal(true)
        }).catch(e => console.log(e.message))
    }
    return (
        <div className="payPage">
            {showModal && <Modal setShowModal={setShowModal} text="Purchased Successfully !" />}

            <div className="reservationSummary">
                <div className="reservationSummary-Headers">
                    <div>פרטי הכרטיס</div>
                    <div>מחיר לכרטיס</div>
                    <div>מיקום מושבים</div>
                </div>
                <div className="reservationSummary-Data">
                    {
                        reservationData.seats.map((seat) => (
                            <div key={nanoid()} className="summary-seat">
                                <div>רגיל</div>
                                <div>{seat.price}</div>
                                <div>כיסא מספר {seat.number}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="price-summary">מחיר סופי: {reservationData.seats.length * reservationData.seats[0].price}$</div>
            <div className="personalDetails">
                <h2>פרטים אישיים</h2>
                <form>
                    <div className="payForm-input">
                        <label>שם פרטי</label>
                        <input type="text" placeholder="שם פרטי" />
                    </div>
                    <div className="payForm-input">
                        <label>שם משפחה</label>
                        <input type="text" placeholder="שם משפחה" />
                    </div>
                    <div className="payForm-input">
                        <label>דואר אלקטרוני</label>
                        <input type="text" placeholder="דואר אלקטרוני" />
                    </div>
                    <div className="payForm-input">
                        <label>אנא הזינו שוב דואר אלקטרוני</label>
                        <input type="text" placeholder="אנא הזינו שוב דואר אלקטרוני" />
                    </div>
                    <div className="payForm-input">
                        <label>טלפון סלולרי</label>
                        <input type="text" placeholder="טלפון סלולרי" />
                    </div>

                </form>
            </div>
            <div className="paymentDetails">
                <h2>פרטי תשלום</h2>
                <form onSubmit={onSubmitpPay}>
                    <div className="payForm-input">
                        <label>סוג כרטיס</label>
                        <input type="text" placeholder="סוג כרטיס" />
                    </div>
                    <div className="payForm-input">
                        <label>מספר כרטיס</label>
                        <input type="text" placeholder="מספר כרטיס " />
                    </div>
                    <div className="payForm-input">
                        <label>תוקף כרטיס</label>
                        <input type="text" placeholder="תוקף כרטיס" />
                    </div>
                    <div className="payForm-input">
                        <label>תעודת זהות</label>
                        <input type="text" placeholder="תעודת זהות" />
                    </div>
                    <div className="payForm-input">
                        <label>3 ספרות אחרונות על גב הכרטיס</label>
                        <input type="text" placeholder="3 ספרות אחרונות על גב הכרטיס" />
                    </div>
                    <button>לשלם</button>
                </form>
            </div>
        </div>
    )
}

export default PayPage
