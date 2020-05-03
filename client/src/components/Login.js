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
                <h1>Login</h1>
                <div className= 'container'>
                <form>
                    <input name= 'email' type='text' placeholder='Your email' />
                    <input name= 'password' type='text' placeholder='Your password' />
                </form>
                </div>
                <button className= 'btn btn-primary'>Login</button> 
                
            </div>
        )
    }
}
export default Login