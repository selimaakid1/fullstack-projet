import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>My Restaurant</h1>
            <div className='row d-flex w-25'>
            <div className= 'col' id='links'>
                    <Link to='/'>Acceuil</Link>
                </div>
                <div className= 'col' id='links'>
                    <Link to='/register'>Inscription</Link>
                </div>
                <div i className= 'col' id='links' >
                    <Link to='/login'><i class="fas fa-sign-in-alt"></i></Link>
                </div>


            </div>
        </div>
    )
}

export default Navbar
