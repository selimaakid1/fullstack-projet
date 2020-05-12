import { ADD_RESERVATION, DELETE_RESERVATION, EDIT_RESERVATION} from '../actions/types'
import { v4 as uuid } from "uuid";


const initialState = [
   
        {
            id: uuid(),
            Name: 'Selima',
            Date: '10/8/2020',
            Number: 3,
            Placement: 'Outside',
            Hour: '20h : 30'
        }
    
]

const ReservationReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_RESERVATION:
            return [...state, action.payload]
        case DELETE_RESERVATION:
            return state.filter(el => el.id !== action.payload)
            default:
                return state
    }
}
export default ReservationReducer