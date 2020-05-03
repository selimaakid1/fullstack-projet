import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS,LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    error: null
}

const AuthReducer = (state = initialState, action ) => {
    switch(action.type){
        default: 
            return state
    }
}

export default AuthReducer