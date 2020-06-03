import React from 'react'
import { connect } from 'react-redux'
import { getReservation } from '../actions/ReservationActions'
import ReservItem from './ReservItem'

class ReservationList extends React.Component {
    componentDidMount() {
        this.props.getReservation()
    }

    render() {
        return (
            <div className='reservation-card'>
                {
                    this.props.myReserv.booking.length === 0 ? (
                        <h4>Votre liste de reservation est vide!</h4>
                    ) : (
                            this.props.myReserv.booking.map(reserv => <ReservItem reserv={reserv} />)
                        )
                }
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        myReserv: state.reserv
    }
}
export default connect(mapStateToProps, {getReservation})(ReservationList)