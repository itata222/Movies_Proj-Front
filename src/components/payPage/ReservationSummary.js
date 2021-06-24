import React, { useContext } from 'react'
import { nanoid } from 'nanoid'
import { ReservationContext } from '../../contexts/reservationContext';

const ReservationSummary = () => {
    const { reservationData } = useContext(ReservationContext);

    return (
        <>
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
            <div className="price-summary">מחיר סופי: {reservationData.seats.length * (reservationData.seats[0]?.price || 14)}$</div>
        </>

    )
}

export default ReservationSummary
