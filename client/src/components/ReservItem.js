import React from 'react'
import { connect } from 'react-redux'
import { deleteReserv, saveReserv } from '../actions/ReservationActions'
import Card from 'react-bootstrap/Card'

const ReservItem = ({ reserv, deleteReserv, saveReserv }) => {
    return (
        <div className='reservation-item' >
       
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Votre reservation</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{reserv.Name}</Card.Subtitle>
                    <Card.Text>
                        {reserv.Date}
                    </Card.Text>
                    <Card.Text>
                        {reserv.Hour}
                    </Card.Text>
                    <Card.Text>
                        {reserv.Placement}
                    </Card.Text>
                    <Card.Text>
                        {reserv.Number}
                    </Card.Text>
                    <button className='btn-signup' onClick={() => saveReserv(reserv)}>EDIT</button>
                    <button className='btn-signup' onClick={() => deleteReserv(reserv._id)}>DELETE</button>
                </Card.Body>
            </Card>

        </div>
    )
}



export default connect(null, {deleteReserv, saveReserv})(ReservItem)
