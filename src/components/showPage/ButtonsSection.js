import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ReservationContext } from '../../contexts/reservationContext'

const ButtonsSection = ({ showID }) => {
    const { reservationData } = useContext(ReservationContext)
    const history = useHistory()

    const payClick = () => {
        history.push(`/pay-page/${showID}`)
    }

    const backClick = () => {
        history.goBack()
    }

    return (
        <div className="buttonsSection">
            <button disabled={reservationData.seats.length > 0 ? false : true} className="payButton" onClick={payClick}>לתשלום</button>
            <button className="backButton" onClick={backClick}>חזרה</button>
        </div>
    )
}

export default ButtonsSection
