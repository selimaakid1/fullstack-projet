import React, { Component } from 'react'
import { Link } from 'react-router-dom'


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
                <h1 className='signin'>Connecter vous</h1>
                <div className= 'container'>
                <form>
                    <input name= 'email' type='text' placeholder='Adresse e-mail' />
                    <input name= 'password' type='text' placeholder='Mot de passe' />
                </form>
                </div>
                <div className='bottom'>
                <button className= 'btn btn-primary' className= 'btn-signup'>Connecter vous</button> 
                </div>
                <h6 className='link-sign'>Vous n’avez pas de compte  ? <Link to='/register' >Inscrivez-vous</Link></h6>

                </div>
        )
    }
}
export default Login