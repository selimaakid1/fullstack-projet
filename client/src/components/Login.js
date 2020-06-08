import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/AuthActions'
import { setAlert, removeAlert } from '../actions/AlertActions'
import { clearError } from '../actions/AuthActions'
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


        if (nextProps.auth.error) {
            if (nextProps.auth.error === 'Please register before!' || nextProps.auth.error === 'Wrong Password!') {
                let id = uuid()
                this.props.setAlert(nextProps.auth.error, 'warning', id)
                setTimeout(() => {
                    this.props.removeAlert()
                    this.props.clearError()
                }, 5000)
            }

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


                <div className='container'>
                    <form >
                        <div className='loginform'>
                            <h1 className='signup'>Connecter vous</h1>
                        </div>
                        <input className='media' onChange={this.handleChange} name='Email' type='text' placeholder='Adresse e-mail' />
                        <input className='media' onChange={this.handleChange} name='PassWord' type='password' placeholder='Mot de passe' />
                    </form>
                </div>
                <div className='bottom'>
                    <button onClick={this.loginNow} className='btn-signup'>Connecter vous</button>
                    <div>

                    </div>
                </div>
                <h6 className='sign-text'>Vous n’avez pas de compte  ? <Link to='/register'>Inscrivez-vous</Link></h6>
            </div >

        )
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { login, setAlert, removeAlert, clearError })(Login)