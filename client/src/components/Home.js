import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { loadUser} from '../actions/AuthActions'
import Carousel from './Carousel'

class Home extends Component  {
    componentDidMount(){
        this.props.loadUser()
    }
    render (){
        return (
        <div>
            <Carousel />
        </div>
    )}
    
}

export default connect(null, {loadUser}) (Home)
