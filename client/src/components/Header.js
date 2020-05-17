import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div>
            <div className='header-image'>
            <button className='reserv-btn'><Link to='/reservation'>Reservé une table</Link></button>
 
            </div>
            {/* <div className='frontImg'>
            </div> */}
        </div>
    )
}
export default Header


