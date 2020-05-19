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
    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.save)
    }

    
    render() {
        return (
            <div className='reservation' >
                <h5 className='reservation-title'>Reserver une table</h5>
                <div className='reservation-form' class='row'>
                    <div class="col-md-2 col-sm-3">
                    </div>
                 
                    <div >
                        <input type='text' onChange={this.handleChange} name='Name' placeholder='Nom complet'  />
                        <input type='date' onChange={this.handleChange} name='Date' placeholder='Date' />
                        <input type='time' onChange={this.handleChange} name='Hour' placeholder='Heure' />       
                        <input type='text' onChange={this.handleChange} name='Number' placeholder='Combien de personnes?' />
                        <input type='email' onChange={this.handleChange} name='Email' placeholder='Adresse e-mail' />                   
                        <input type='text' onChange={this.handleChange} name='Placement' placeholder='Où vous voulez vous asseoir?' />
               
                    </div>


                </div>
                <div className='bottom'>        
                    <button className='btn-signup' onClick = { e => {
                        e.preventDefault()
                        this.props.addNewReservation({...this.state, id: uuid()})
                    }}>Reserver</button>
                </div>
        </div>
        )
    }

}
const mapStateToProps = state => {
    return{
        save: state.reserv.saved
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewReservation: reservation => dispatch(addReservation(reservation))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Reservation)

