import React, { Component } from 'react'

class Reservation extends Component {
    render() {
        return (
            <div>
                <h5 className='signin'>Reserver une table</h5>
                <form>
                    <input type='text' placeholder='Nom complet' />
                    <input type='date' placeholder='Date' />
                    <input type='time' placeholder='Heure' />
                    <input type='email' placeholder='Adresse e-mail' />
                    <input type='text' placeholder='Combien de personnes?' />
                    <select id="placement" name="placement" form="placementform">
                        <option value='terasse'>Terasse</option>
                    </select>
                </form>

            </div>
        )
    }
}
export default Reservation