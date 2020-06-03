import React from 'react'
import { connect } from 'react-redux'
import DashboardItem from './dashboardItems'
import Chart from './Chart'

const Dashboard = props => {
    return (
        <div>
            <div className='reservation-card'>
                {props.myReserv.booking.map(reserv => <DashboardItem reserv={reserv} />)}

            </div>
            <div>
                <Chart data={props.myReserv} />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        myReserv: state.reserv
    }
}
export default connect(mapStateToProps)(Dashboard)