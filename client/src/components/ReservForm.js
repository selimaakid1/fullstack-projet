import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addReserv} from '../actions/ReservActions'
import { v4 as uuid } from "uuid";

class ReservFrom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Name: '',
            Date: '',
            Number: '',
            Placement: '',
            Hour: ''
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <h1>Reservation </h1>
                <form>
                    <label>Name : </label>
                    <input onChange={this.handleChange} name='Name' type='text'value={this.state.Name} />
                    <label>Date : </label>
                    <input onChange={this.handleChange} name='Date' type='text'value={this.state.Date} />
                    <label>Number : </label>
                    <input onChange={this.handleChange} name='Number' type='text'value={this.state.Number} />
                    <label>Placement : </label>
                    <input onChange={this.handleChange} name='Placement' type='text' value={this.state.Placement}/>
                    <label>Hour : </label>
                    <input onChange={this.handleChange} name='Hour' type='text'value={this.state.Hour} />
                    <button onClick={e=>{
                        e.preventDefault()
                        this.props.addNewReserv({...this.state, id : uuid()})
                        this.setState({Name : '',Date : '', Number:'', Placement:'',Hour:''})
                    }}>ADD</button>

                </form>
            </div>
        )
    }
}
const mapDispatchToProps= dispatch =>{
    return {
        addNewReserv : resev => dispatch(addReserv(resev))
    }
}
export default connect (null , mapDispatchToProps)(ReservFrom)