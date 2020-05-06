import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS,LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT } from './types'
import axios from 'axios'
// Load User

// Register User
export const register = formData =>dispatch=>{
    const config = {
        headers:{
            'Content-Type' : 'application/json'
        }
    }
    axios.post('/api/user', formData, config)
    .then (res=> dispatch({
        type: REGISTER_SUCCESS,
        payload : res.data
    }))
    .catch(err=>dispatch({
        type : REGISTER_FAIL,
        payload : err.response.data.msg
    }))
}
// Login User

// Logout User

// Clear Errors