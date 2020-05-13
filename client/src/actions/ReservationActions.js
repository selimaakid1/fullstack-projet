import { ADD_RESERVATION, DELETE_RESERVATION, EDIT_RESERVATION, SAVE_RESERVATION} from './types'

export const addReservation = newReservation => {
    return {
        type: ADD_RESERVATION,
        payload: newReservation
    }
}
export const deleteReserv = id => {
    return {
        type : DELETE_RESERVATION,
        payload : id
    }
}

export const saveReserv = reservation => {
    return {
        type: SAVE_RESERVATION,
        payload: reservation
    }
}