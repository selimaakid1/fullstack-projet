import { ADD_RESERVATION, DELETE_RESERVATION, EDIT_RESERVATION} from './types'

export const addReservation = newReservation => {
    return {
        type: ADD_RESERVATION,
        payload: newReservation
    }
}