import React from 'react'
import ReservList from './ReservationList'
import { connect } from 'react-redux'
import { deleteReserv } from '../actions/ReservActions'

const ReservItem = ({ reserv: { Name, id }, remove }) => {
    return (
        <div>
            <h1>{Name}</h1>
            <button>EDIT</button>
            <button onClick={() => remove(id)}>DELETE</button>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        remove: id => dispatch(deleteReserv(id))
    }
}
export default connect(null, mapDispatchToProps)(ReservItem)