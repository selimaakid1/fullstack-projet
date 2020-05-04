import React, { Component } from 'react'


import { connect } from 'react-redux'
import { v4 as uuid } from "uuid";
import { setAlert, removeAlert } from '../actions/AlertActions'


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
            adress: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    registerNow = () => {
        if (this.state.firstname === '' || this.state.lastname === '', this.state.email === '', this.state.password === '') {
            let id = uuid()
            this.props.setAlert('All fields are required', 'warning', id)
            setTimeout(() => {
                this.props.removeAlert()
            }, 5000)
        }
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <div className='container'>
                    <form>
                        <input name='firstname' type='text' onChange={this.handleChange} placeholder='Your first name' />
                        <input name='lastname' type='text' onChange={this.handleChange} placeholder='Your last name' />
                        <input name='email' type='text' onChange={this.handleChange} placeholder='Your email' />
                        <input name='password' type='text' onChange={this.handleChange} placeholder='Your password' />
                        <input name='phone' type='text' onChange={this.handleChange} placeholder='Your phone number' />
                        <input name='adress' type='text' onChange={this.handleChange} placeholder='Your Adress' />
                    </form>
                </div>
                <button className='btn btn-primary'>Register</button>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        setAlert: (msg, type, id) => dispatch(setAlert((msg, type, id))),
        removeAlert: id => dispatch(removeAlert(id))
    }
}
export default connect(null, mapDispatchToProps)(Register)

