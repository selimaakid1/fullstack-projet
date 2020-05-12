import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import AlertReducer from './AlertReducer'
import ReservationReducer from './ReservationReducer'

// export default combineReducers({auth: AuthReducer})



export default combineReducers({auth: AuthReducer, alert: AlertReducer, reserv: ReservationReducer  })

