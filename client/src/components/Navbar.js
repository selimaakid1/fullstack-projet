import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            {/* <div>
                <h1>My Restaurant</h1>
            </div> */}
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
                        <Link to='/register'>Inscription</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
                
                


            </div>
        </div>
    )
}

export default Navbar
