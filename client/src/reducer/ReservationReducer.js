import { ADD_RESERVATION, DELETE_RESERVATION, EDIT_RESERVATION} from '../actions/types'

const initialState = [
]

const ReservationReducer = (state= initialState, action) => {
    switch(action.type){
        case ADD_RESERVATION:
            return [...state, action.payload]
            default:
                return state
    }
}
export default ReservationReducer