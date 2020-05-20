import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReservation, editReserv, clearReserv } from '../actions/ReservationActions'
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
                        <input type='text' onChange={this.handleChange} name='Name' placeholder='Nom complet' value={this.state.Name} />
                        <input type='date' onChange={this.handleChange} name='Date' placeholder='Date' value={this.state.Date} />
                        <input type='time' onChange={this.handleChange} name='Hour' placeholder='Heure' value={this.state.Hour}/>       
                        <input type='text' onChange={this.handleChange} name='Number' placeholder='Combien de personnes?' value={this.state.Number} />
                        <input type='email' onChange={this.handleChange} name='Email' placeholder='Adresse e-mail'value={this.state.Email} />                   
                        <input type='text' onChange={this.handleChange} name='Placement' placeholder='Où vous voulez vous asseoir?'value={this.state.Placement} />
               
                    </div>


                </div>
                <div className='bottom'>        
                    <button className='btn-signup' onClick = { e => {
                        e.preventDefault()
                        if(this.props.save){
                            this.props.updateReservation(this.state)
                            this.props.clear()
                        } else {
                            this.props.addNewReservation({...this.state, id: uuid()})

                        }
                        this.setState({Name:'', Date:'', Hour:'', Number:'', Email:'', Placement:''})

                    }}>{this.props.save ? 'Modifier votre reservation' : 'Reservé'}</button>
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
        addNewReservation: reservation => dispatch(addReservation(reservation)),
        updateReservation: reservation => dispatch(editReserv(reservation)),
        clear: ()=> dispatch(clearReserv())
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Reservation)

