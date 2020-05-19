import React, { Component } from 'react'
import Reservation from './Reservation'
import ReservationList from './ReservationList'

class ReservationPage extends Component {
    componentWillMount() {
        { this.props.loadUser() }
     }
     render(){

     return (
        <div>
            <div className='reservation-header'>
                <h1>Reservation</h1>
            </div>
            <Reservation />
            <ReservationList />
        </div>
    )
}
}
export default ReservationPage
