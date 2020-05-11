import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../actions/AuthActions'
const Navbar = (props) => {

    const userConnected = () => (

        <div className='row d-flex'>
            <div className='col' id='links'>
               { props.auth.user ? props.auth.user.FirstName + ' ' + props.auth.user.LastName : ''}
            </div>
            <div className='col' id='links'>
                <Link to='/'>Acceuil</Link>
            </div>
            <div className='col' id='links'>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className='col'>
                <a href="#!" onClick={props.logout}>
                    <i className="fas fa-sign-out-alt">
                        Logout
                    </i>
                </a>
            </div>
        </div>
    )

    const guest = () => (
        <div className='row d-flex'>
            <div className='col' id='links'>
                <Link to='/'>Acceuil</Link>
            </div>
            <div className='col' id='links'>
                <Link to='/register'>Inscription</Link>
            </div>
            <div i className='col' id='links' >
                <Link to='/login'>Login</Link>
            </div>

        </div>
    )

    return (
        <div className='navbar'>
            {/* <div>
                <h1>My Restaurant</h1>
            </div> */}
            {/* <div className='row d-flex'>
                <div className='col' id='links'>
                    <Link to='/'>Acceuil</Link>
                </div>
                <div className='col' id='links'>
                    <Link to='/menu'>Menu</Link>
                </div>
                <div i className='col' id='links' >
                    <Link to='/reservation'>Reservation</Link>
                </div>
                <div className='col' id='links'>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='col' className='dropdown' id='links'>
                    <i class="fas fa-caret-down"></i>
                    <div class="dropdown-content">
                        <Link to='/register'>Inscription</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div> */}
            {
                props.auth.isAuthenticated ? userConnected() : guest()
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps , {logout})(Navbar)
