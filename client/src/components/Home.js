import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { loadUser} from '../actions/AuthActions'
import Carousel from './Carousel'
import Reservation from './Reservation'
import Header from './Header'

class Home extends Component  {
    componentWillMount(){
        this.props.loadUser()
    }
    render (){
        return (
            
        <div>
            <Header />
            <Reservation />
            
        </div>
    )}
    
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {loadUser}) (Home)
