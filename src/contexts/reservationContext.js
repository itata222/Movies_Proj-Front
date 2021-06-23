import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import reservationReducer, { initialReservationData } from '../reducers/reservationReducer';

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {
    const [reservationData, dispatchReservationData] = useReducer(reservationReducer, initialReservationData)

    return (
        < ReservationContext.Provider value={{ reservationData, dispatchReservationData }}>
            {props.children}
        </ ReservationContext.Provider>
    )

}

export default ReservationContextProvider;