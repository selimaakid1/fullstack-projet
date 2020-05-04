import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR, CLEAR_ERROR, LOGOUT } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    user: null,
    error: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true

            }
            case REGISTER_FAIL : 
            localStorage.removeItem('token')
            return {
                ...state,
                token : null,
                isAuthenticated :false ,
                error : action.payload
            }
        default:
            return state
    }
}

export default AuthReducer