import React from 'react'
import { connect } from 'react-redux'
import { deleteReserv } from '../actions/ReservationActions'

const ReservItem = ({ reserv: { Name, id }, remove }) => {
    return (
        <div className='reservation-item' className='bottom'>
            <h1 className='reservation-name'>{Name}</h1>
            <button className='btn-signup'>EDIT</button>
            <button className='btn-signup' onClick={() => remove(id)}>DELETE</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        remove: id => dispatch(deleteReserv(id))
    }
}
export default connect(null, mapDispatchToProps)(ReservItem)
