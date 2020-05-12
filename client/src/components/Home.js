import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../actions/AuthActions'
import Carousel from './Carousel'
import Reservation from './Reservation'
import ReservationList from './ReservationList'

class Home extends Component  {
    componentWillMount(){
        if (this.props.auth.user) {this.props.loadUser()}
    }
    render() {
        return (
            
        <div>
            <Carousel />
            <Reservation />
            <ReservationList />
        </div>
    )}
    
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {loadUser}) (Home)
