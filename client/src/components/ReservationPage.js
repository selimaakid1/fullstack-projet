import React, { Component } from 'react'
import Reservation from './Reservation'
import ReservationList from './ReservationList'

class ReservationPage extends Component {
    
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
