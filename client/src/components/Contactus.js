import React, { Component } from 'react'
import { render } from 'react-dom';

class Contactus extends Component {
    constructor(props) {
        super(props);
        this.state = ''
    }

    render() {
        return (
            <div className='contact-form'>
                <h5 className='signin'>Contacter nous ici</h5>

            
                    <div >
                        <label>Comment pouvons nous aider?</label>
                        <br />
                        <select id="help" name="helplist" form="helpform">
                            <option value='like'>J'ai pas aimer</option>
                            <option value='quality'>Produits de qualités</option>
                            <option value='wrong'>Mauvais produit</option>
                            <option value='advice'>Je voudrais vous conseiller</option>
                        </select>
                    </div>
                    <div>
                        <input type='text' name='email' placeholder='Nom' />
                    </div>
                    <div>
                        <input type='text' name='email' placeholder='Prénom' />
                    </div>
                    <div>
                        <input type='text' name='email' placeholder='Adresse e-mail' />
                    </div>
                    <div>
                        <input type='text' name='comment' placeholder='Commentaire' />
                    </div>
             
                <div className='bottom'>
                    <button className='btn-signup'>Envoyer</button>
                </div>

            </div>
        )

    }
}

export default Contactus
