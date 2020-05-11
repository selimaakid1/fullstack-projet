import { ADD_RESERV, DELETE_RESERV, UPADTE_RESERV } from '../actions/types'
import { v4 as uuid } from "uuid";


const initialState = [
    {
        id: uuid(),
        Name: 'Slim',
        Date: '15/9/2020',
        Number: 3,
        Placement: 'Outside',
        Hour: '15h : 30'
    }
]

const ReservReducer = (state = initialState , action )=>{
    switch(action.type){
        case ADD_RESERV:
            return [...state, action.payload]
            case DELETE_RESERV:
                return state.filter(el=>el.id !== action.payload)
        default: 
        return state
    }
}

export default ReservReducer