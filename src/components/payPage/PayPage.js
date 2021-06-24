import { Modal } from '@material-ui/core';
import React, { useContext } from 'react'
import { useState } from 'react';
import { ReservationContext } from '../../contexts/reservationContext';
import { takeSeatsFunc } from '../../services/userService';
import PaymentDetails from './PaymentDetails';
import PersonalDetails from './PersonalDetails';
import ReservationSummary from './ReservationSummary';

const PayPage = (props) => {
    const showID = props.match.params.id;
    const [personalDetails, setPersonalDetails] = useState({});
    const [paymentDetails, setPaymentDetails] = useState({});
    const [showModal, setShowModal] = useState(false);
    const { reservationData } = useContext(ReservationContext);

    const isFormsInavlid = () => {
        return Object.keys(personalDetails).length !== 5 ||
            Object.keys(paymentDetails).length !== 4;
    };

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

            <ReservationSummary />
            <PersonalDetails setPersonalDetails={setPersonalDetails} personalDetails={personalDetails} />
            <PaymentDetails paymentDetails={paymentDetails} setPaymentDetails={setPaymentDetails} />
            <button className="submitPay" disabled={isFormsInavlid()} onClick={onSubmitpPay}>Pay</button>

        </div>
    )
}

export default PayPage
