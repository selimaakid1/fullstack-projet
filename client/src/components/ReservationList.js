import React from 'react'
import { connect } from 'react-redux'
import ReservItem from './ReservItem'

const  ReservationList = props => {
    return (
        <div>
            {props.myReserv.map(reserv => <ReservItem reserv= {reserv}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        myReserv: state.reserv
    }
}
export default connect(mapStateToProps)(ReservationList)