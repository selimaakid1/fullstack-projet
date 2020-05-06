import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { v4 as uuid } from "uuid";
import { setAlert, removeAlert } from '../actions/AlertActions'
import { register } from '../actions/AuthActions'



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstName: '',
            LastName: '',
            Email: '',
            PassWord: '',
            PhoneNumber: '',
            Adress: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    registerNow = () => {

        if (this.state.FirstName === '' || this.state.LastName === '', this.state.Email === '', this.state.PassWord === '') {
            let id = uuid()
            this.props.setAlert('All fields are required', 'warning', id)
            setTimeout(() => {
                this.props.removeAlert()
            }, 5000)
        } else {
            this.props.register({
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                Email: this.state.Email,
                PassWord: this.state.PassWord,
                PhoneNumber: this.state.PhoneNumber,
                Adress: this.state.Adress
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.error === 'User already exists!!') {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'warning', id)
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
                        <input name='FirstName' type='text' onChange={this.handleChange} placeholder='Your first name' />
                        <input name='LastName' type='text' onChange={this.handleChange} placeholder='Your last name' />
                        <input name='Email' type='text' onChange={this.handleChange} placeholder='Your email' />
                        <input name='PassWord' type='text' onChange={this.handleChange} placeholder='Your password' />
                        <input name='PhoneNumber' type='text' onChange={this.handleChange} placeholder='Your phone number' />
                        <input name='Adress' type='text' onChange={this.handleChange} placeholder='Your Adress' />
                    </form>
                </div>
                <button onClick={this.registerNow} className='btn btn-primary'>Register</button>

            </div>
        )
    }
}



// const mapDispatchToProps = dispatch => {
//     return {
//         setAlert: (msg, type, id) => dispatch(setAlert((msg, type, id))),
//         removeAlert: id => dispatch(removeAlert(id))
//     }
// }
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { setAlert, removeAlert, register })(Register)

