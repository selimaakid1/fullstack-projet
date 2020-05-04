import React, { Component } from 'react'

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
    render() {
        return (
            <div>
                <h1>Register</h1>
                <div className= 'container'>
                <form>
                    <input name= 'firstname' type='text'onChange={this.handleChange} placeholder='Your first name' />
                    <input name= 'lastname' type='text'onChange={this.handleChange} placeholder='Your last name' />
                    <input name= 'email' type='text'onChange={this.handleChange} placeholder='Your email' />
                    <input name= 'password' type='text'onChange={this.handleChange} placeholder='Your password' />
                    <input name= 'phone' type='text'onChange={this.handleChange} placeholder='Your phone number' />
                    <input name= 'adress' type='text' onChange={this.handleChange}placeholder='Your Adress' />
                </form>
                </div>
                <button className= 'btn btn-primary'>Register</button> 
                
            </div>
        )
    }
}
export default Register