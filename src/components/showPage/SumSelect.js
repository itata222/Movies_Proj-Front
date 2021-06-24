import React, { useContext } from 'react';
import { ReservationContext } from '../../contexts/reservationContext'

const SumSelect = () => {
    const { reservationData } = useContext(ReservationContext);
    console.log(reservationData)
    return (
        <div className="sumSelect">
            <div className="sumSelect-table">
                <div className="sunSelect-tableHeaders">
                    <div>מושבים נבחרו</div>
                    <div>מחיר לכרטיס</div>
                    <div>סה"כ</div>
                </div>
                <div className="sunSelect-tableData">
                    <div>{reservationData.seats.length}</div>
                    <div>14$</div>
                    <div>{reservationData.seats.length * 14}$</div>
                </div>
            </div>
        </div>
    )
}

export default SumSelect
