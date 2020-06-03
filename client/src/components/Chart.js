import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                labels: ['inside' , 'outside'],
                datasets: [{
                    label: 'Reserveation ',
                    data: [this.props.data.booking.filter(el=>el.Placement == 'Dehors').length,1]
                }],
                backgroundColor: [
                    'rgba(80,199,199)',
                    'rgba(66, 92, 92)',
                    'rgba(62, 99, 58)',
                    'rgba(95, 99, 59)',
                    'rgba(138, 84, 23)',
                    'rgba(23, 73, 138)',
                    'rgba(138, 12, 136)',
                    'rgba(140, 10, 47)',
                    'rgba(161, 24, 6)',
                ]
            }
        }
    }
    componentWillMount(){
        console.log(this.props.data.booking.filter(el=>el.Placement == 'Dehors'))
    }
    render() {
        return (
            <div className='chart'>
                <Bar
                    data={this.state.chartData}
                    options={{             
                }}
                />
            </div>
        )

    }
}
export default Chart