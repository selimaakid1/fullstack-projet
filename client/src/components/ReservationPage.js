import React from 'react'
import Reservation from './Reservation'
import ReservationList from './ReservationList'

function ReservationPage() {
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

export default ReservationPage
