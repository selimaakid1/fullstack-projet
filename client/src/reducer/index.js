import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'
import ReservReducer from './ReservReducer'
// export default combineReducers({auth: AuthReducer})



export default combineReducers({ auth: AuthReducer, alert: AlertReducer, reserv: ReservReducer })

