import { ADD_RESERVATION, DELETE_RESERVATION, EDIT_RESERVATION, SAVE_RESERVATION } from '../actions/types'
import { v4 as uuid } from "uuid";


const initialState = {
    booking:[
         {
            id: uuid(),
            Name: 'Selima',
            Date: '10/8/2020',
            Number: 3,
            Placement: 'Dehors',
            Hour: '20h : 30'
        }
    ],
    saved: null
}

const ReservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESERVATION:
            return {
                ...state,
                booking: [...state.booking, action.payload]
            }

        case DELETE_RESERVATION:
            return {
                ...state,
                booking: [state.booking.filter(el => el.id !== action.payload)]
            }
        case SAVE_RESERVATION:
            return {
                ...state,
                saved: action.payload
            }
        default:
            return state
    }
}
export default ReservationReducer