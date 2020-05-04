import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>
                <h1>Connecter vous</h1>
                <div className= 'container'>
                <form>
                    <input name= 'email' type='text' placeholder='Adresse e-mail' />
                    <input name= 'password' type='text' placeholder='Mot de passe' />
                </form>
                </div>
                <button className= 'btn btn-primary'>Connecter vous</button> 
                
            </div>
        )
    }
}
export default Login