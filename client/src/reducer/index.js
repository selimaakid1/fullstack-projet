import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'


export default combineReducers({auth: AuthReducer})

import AlertReducer from './AlertReducer'

export default combineReducers({auth: AuthReducer, alert: AlertReducer  })

