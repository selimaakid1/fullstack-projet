import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Header = (props) => {
    return (
        <div>
            <div className='header-image'>

                {props.auth.user ? <button className='reserv-btn'><Link to='/reservation'>Reservé une table</Link></button> : <button className='reserv-btn'><Link to='/login'>Reservé une table</Link></button>
                 

                }



            
 

            </div>
            {/* <div className='frontImg'>
            </div> */}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Header)


