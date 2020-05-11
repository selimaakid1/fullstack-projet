import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadUser } from '../actions/AuthActions'
import Carousel from './Carousel'
import ReservList from './ReservationList'
import ReservFrom from './ReservForm'

class Home extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        if (this.props.auth.user) { this.props.loadUser() }
    }
    render() {
        return (
            <div>
                <ReservFrom/>
                <ReservList />
                <Carousel />
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
