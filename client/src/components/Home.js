import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../actions/AuthActions'
import Reservation from './Reservation'
import Header from './Header'
import RestoInfo from './RestaurantInfo'
import OurFeatures from './OurFeatures'

class Home extends Component {
    componentWillMount() {
        if (this.props.auth.token) { this.props.loadUser() }

    }
    render() {
        return (
            <div>
                <Header />
                <RestoInfo />
                <OurFeatures />
                {/* <Carousel /> */}
                {this.props.auth.token ? <Reservation /> : null}


            </div>
        )
    }



}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { loadUser })(Home)
