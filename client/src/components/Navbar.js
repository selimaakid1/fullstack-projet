import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>My Restaurant</h1>
            <ul className='row d-flex w-25'>
            <li className= 'col' id='links'>
                    <Link to='/'>Home</Link>
                </li>
                <li className= 'col' id='links'>
                    <Link to='/register'>Register</Link>
                </li>
                <li className= 'col' id='links' >
                    <Link to='/login'>Login</Link>
                </li>


            </ul>
        </div>
    )
}

export default Navbar
