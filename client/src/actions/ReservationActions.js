import { ADD_RESERVATION, DELETE_RESERVATION, EDIT_RESERVATION, SAVE_RESERVATION, CLEAR_RESERVATION, RESERVATION_ERROR, GET_RESERVATION, REMOVE_CURRENT_RESERVATION } from './types'
import axios from 'axios'

// GET RESERVATION
export const getReservation = () => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.get('/api/reserv', config)
        .then(res => dispatch({
            type: GET_RESERVATION,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: RESERVATION_ERROR,
            payload: err.response.msg
        }))
}
// REMOVE CURRENT RESERVATION
export const removeCurrentReserv = () => dispatch => {
    dispatch({
        type: REMOVE_CURRENT_RESERVATION
    })
}

// ADD RESERVATION
export const addReservation = newReservation => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post('/api/reserv', newReservation, config)
        .then(res => dispatch({
            type: ADD_RESERVATION,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: RESERVATION_ERROR,
            payload: err.response.msg
        }))
}

// DELETE RESERVATIOM
export const deleteReserv = id => dispatch => {
    axios.delete(`/api/reserv/${id}`)
        .then(() => dispatch({
            type: DELETE_RESERVATION,
            payload: id
        }))
        .catch(err => dispatch({
            type: RESERVATION_ERROR,
            payload: err.response.msg
        }))
}

export const saveReserv = reservation => dispatch => {
    dispatch({
        type: SAVE_RESERVATION,
        payload: reservation
    })
}

// EDIT RESERVATION
export const editReserv = updated => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.put(`/api/reserv/${updated._id}`, updated, config)
        .then(res => dispatch({
            type: EDIT_RESERVATION,
            payload: updated
        }))
        .catch(err => dispatch({
            type: RESERVATION_ERROR,
            payload: err.response.msg
        }))
}
export const clearReserv = () => dispatch => {
    dispatch({
        type: CLEAR_RESERVATION
    })
}
