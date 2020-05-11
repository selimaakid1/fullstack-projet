import { ADD_RESERV, DELETE_RESERV, UPADTE_RESERV } from './types'


export const addReserv = newReserv =>{
    return {
        type :ADD_RESERV,
        payload : newReserv
    }
}
export const deleteReserv = id=>{
    return {
        type : DELETE_RESERV,
        payload : id
    }
}