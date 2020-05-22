import React, { Component } from 'react'
import { render } from 'react-dom';
import { WrappedMap } from './Map'

class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = ''
    }

    render() {
        return (



            <div className='contact-form'>
                <div className='contact-header'>
                    <h1>Contact</h1>
                </div>
                <div className='formulaire'>
                    <div className='contacts'>
                        <h5 className='signin'>Contacter nous ici</h5>
                        <div >
                            <form>
                                <label>Comment pouvons nous aider?</label>
                                <br />
                                {/* <select id="help" name="helplist" form="helpform">
                            <option value='like'>J'ai pas aimer</option>
                            <option value='quality'>Produits de qualités</option>
                            <option value='wrong'>Mauvais produit</option>
                            <option value='advice'>Je voudrais vous conseiller</option>
                        </select> */}
                                <input type='text' name='email' placeholder='Nom' />
                                <input type='text' name='email' placeholder='Prénom' />
                                <input type='text' name='email' placeholder='Adresse e-mail' />
                                <input type='text' name='comment' placeholder='Commentaire' />
                            </form>
                        </div>
                        <div className='bottom'>
                            <button className='btn-signup'>Envoyer</button>
                        </div>
                    </div>
                    <div className='map'>
                        <WrappedMap
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div>

            </div>
        )

    }
}

export default Contactus
