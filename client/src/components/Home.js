import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { loadUser} from '../actions/AuthActions'

class Home extends Component  {
    componentDidMount(){
        this.props.loadUser()
    }
    render (){
        return (
        <div>
            <h1>This is the homepage.</h1>
        </div>
    )}
    
}

export default connect(null, {loadUser}) (Home)
