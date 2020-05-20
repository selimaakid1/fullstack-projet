import React, { Component } from 'react'
import MenuTab from './MenuTab'

class Menu extends Component {
    
     render(){
    return (
        <div>
            <div className='menu-header'>
                <h1>Menu</h1>
            </div>
            <h2 className='small-title'>-Discover-</h2>
            <h1 className='menu-title'>Menu à la carte</h1>
            <p className='menu-text'>
                Explorez la texture, la couleur et bien sûr les goûts ultimes avec notre menu de saison. Tous les ingrédients sont frais et soigneusement sélectionnés par nos chefs. Profitez d'une expérience culinaire extraordinaire.</p>
            <div className='menu-box'>
                <div>
                    <MenuTab />

                </div>
            </div>
        </div>

    )
}
}
export default Menu
