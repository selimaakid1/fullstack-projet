import { ADD_RESERVATION, DELETE_RESERVATION, EDIT_RESERVATION, SAVE_RESERVATION, CLEAR_RESERVATION, RESERVATION_ERROR, GET_RESERVATION, REMOVE_CURRENT_RESERVATION } from '../actions/types'



const initialState = {
    booking: [],
    saved: null,
    error: null
}

const ReservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESERVATION:
            return {
                ...state,
                booking: action.payload
            }
        case ADD_RESERVATION:
            return {
                ...state,
                booking: [action.payload, ...state.booking]
            }

        case DELETE_RESERVATION:
            return {
                ...state,
                booking: [state.booking.filter(el => el._id !== action.payload)]
            }
        case SAVE_RESERVATION:
            return {
                ...state,
                saved: action.payload
            }
        case EDIT_RESERVATION:
            return {
                ...state,
                booking: state.booking.map(el => el._id === action.payload._id ? action.payload : el)
            }
        case CLEAR_RESERVATION:
            return {
                ...state,
                saved: null
            }
        case RESERVATION_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case REMOVE_CURRENT_RESERVATION:
            return{
                ...state,
                booking: []
            }
        default:
            return state
    }
}
export default ReservationReducer