import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReservation } from '../actions/ReservationActions'
import { v4 as uuid } from "uuid";

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Date: '',
            Number: '',
            Placement: '',
            Hour: '',
            Email: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div className='reservation' >
                <h5 className='signin'>Reserver une table</h5>
                <div className='reservation-form' class='row'>
                    <div class="col-md-4 col-sm-6">
                        <input type='text' onChange={this.handleChange} name='Name' placeholder='Nom complet' />
                        <i class="fa fa-pencil-square-o"></i>
                        <input type='date' onChange={this.handleChange} name='Date' placeholder='Date' />
                        <i class="fa fa-calendar-o" aria-hidden="true"></i>
                        <input type='time' onChange={this.handleChange} name='Hour' placeholder='Heure' />
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                    </div>
                    <div class="col-md-4 col-sm-6">
                        <input type='email' onChange={this.handleChange} name='Email' placeholder='Adresse e-mail' />
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <input type='text'  onChange={this.handleChange} name='Number' placeholder='Combien de personnes?' />
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>


                </div>
                <div className='bottom'>
                    <button className='btn-signup' onClick = {() => {
                        this.props.addNewReservation({...this.state, id: uuid()})
                    }}>Reserver</button>
                </div>
            </div>
        )
    }

}
const mapDispatchToProps = dispatch => {
    return {
        addNewReservation: reservation => dispatch(addReservation(reservation))
    }
}
export default connect (null, mapDispatchToProps) (Reservation)