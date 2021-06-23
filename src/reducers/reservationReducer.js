export const initialReservationData = {
    seats: []
}

const reservationReducer = (reservation, action) => {
    switch (action.type) {
        case 'SET_SEATS':
            return { ...reservation, seats: [...action.seats] }
        default:
            return { ...reservation }
    }
}

export default reservationReducer