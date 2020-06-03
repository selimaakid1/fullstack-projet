import React from 'react'
import { connect } from 'react-redux'
import { deleteReserv } from '../actions/ReservationActions'
import Card from 'react-bootstrap/Card'

const DashboardItem = ({ reserv, remove }) => {
    return (
        <div className='dashboard-item' >

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
                    <button className='btn-signup' onClick={() => remove(reserv.id)}>DELETE</button>
                </Card.Body>
            </Card>

        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        remove: id => dispatch(deleteReserv(id)),


    }
}
export default connect(null, mapDispatchToProps)(DashboardItem)