import React, { Component } from 'react'
import { connect } from 'react-redux'
import {v4 as uuid} from "uuid"; 
import { setAlert, removeAlert } from '../actions/AlertActions'

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
        this.setState({[e.target.name]: e.target.value })
    }
    registerNow = () => {
        if(this.state.firstname === '' || this.state.lastname === '', this.state.email === '' , this.state.password === '' ){
            let id = uuid()
        this.props.setAlert('All fields are required', 'warning', id)
        setTimeout(() => {
            this.props.removeAlert()}, 5000)
    }
    }
    render() {

        return (
            <div>
                <h1>Créer un compte gratuitement</h1>
                <div className= 'container'>
                <form>
                    <input name= 'firstname' type='text' placeholder='Prénom' />
                    <input name= 'lastname' type='text' placeholder='Nom' />
                    <input name= 'email' type='text' placeholder='Adresse e-mail' />
                    <input name= 'password' type='text' placeholder='Mot de passe' />
                    <input name= 'phone' type='text' placeholder='Numero de telephone' />
                    <input name= 'adress' type='text' placeholder='Adresse' />
                </form>
                </div>
                <button onClick = {this.registerNow } className= 'btn btn-primary'>Inscrivez vous</button> 
                
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
export default connect(null, mapDispatchToProps ) (Register)