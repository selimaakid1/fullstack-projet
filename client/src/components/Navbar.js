import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/AuthActions'
import { removeCurrentReserv } from '../actions/ReservationActions'
const Navbar = (props) => {

    const logMeOut = () => {
        props.logout()
        props.removeCurrentReserv()
    }
    const userConnected = () => (
        <div className='navbar'>
            <div className='logo'>
                <h1 className='logo-name'>Manducare</h1>
            </div>
            <div className='row d-flex'>
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
                        <div className='col' className='username' id='links'>
                            {props.auth.user ? props.auth.user.FirstName + ' ' + props.auth.user.LastName : ''}
                        </div>
                        <div className='col'>
                            <a href="#!" onClick={logMeOut}>
                                <i className="fas fa-sign-out-alt"></i>
                            Logout
                    </a>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )

    const guest = () => (
        <div className='navbar'>
            <div className='logo'>
                <h1 className='logo-name'>Manducare</h1>
            </div>
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
        </div >
    )

    return (


        props.auth.isAuthenticated ? userConnected() : guest()



    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logout, removeCurrentReserv })(Navbar)
