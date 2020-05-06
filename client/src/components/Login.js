import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/AuthActions'
import { setAlert, removeAlert } from '../actions/AlertActions'
import { v4 as uuid } from "uuid";
import { Link } from 'react-router-dom'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            PassWord: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/')

        }
        if (nextProps.auth.error === 'Please register before!'||nextProps.auth.error === 'Wrong Password!' ) {
            let id = uuid()
            this.props.setAlert(nextProps.auth.error, 'warning', id)
            setTimeout(() => {
                this.props.removeAlert()
                this.props.clearError()
            }, 5000)
        }

    }


    loginNow = () => {
        if (this.state.Email === '' || this.state.PassWord === '') {
            let id = uuid()
            this.props.setAlert('Please enter Your credentials before ! ', 'danger', id)
            setTimeout(() => {
                this.props.removeAlert(id)

            }, 5000)
        } else {
            this.props.login({
                Email: this.state.Email,
                PassWord: this.state.PassWord
            })
        }
    }
    render() {
        return (
            <div>

               


                <h1>Login</h1>

                <div className='container'>
                    <form>
                        <input onChange={this.handleChange} name='Email' type='text' placeholder='Your email' />
                        <input onChange={this.handleChange} name='PassWord' type='text' placeholder='Your password' />
                    </form>
                </div>
                <button onClick={this.loginNow} className='btn btn-primary'>Login</button>






               

                
                

            </div>

        )
    }
}

const mapStateToProps = state=>{
    return {
        auth : state.auth
    }
}
export default connect(mapStateToProps, { login, setAlert, removeAlert })(Login)