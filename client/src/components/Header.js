import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'


const Header = (props) => {
    return (
        <div className='section-a'>
            <div className='header-image'>
                {props.auth.user ? <Button className='reserv-btn' ><Link to='/reservation'>Reservé une table</Link></Button>: <Button className='reserv-btn' variant="secondary"><Link to='/login'>Reservé une table</Link></Button>
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Header)


