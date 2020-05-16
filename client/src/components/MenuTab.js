import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'

function MenuTab() {
    return (
        <div className='menu-tab'>
            <Tabs defaultActiveKey="aperitifs" id="uncontrolled-tab-example">
                <Tab eventKey="aperitifs" title="Hors d'oeuvre">
                    <div>
                        <h5 className='menu-name' >Assiette de Fruits et Fondue de Brie</h5 >
                        <p className='menu-description'>Wedge of baked Brie with ripe melon and berries</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h5 className='menu-name'>Chausson de Fromage de Chèvre</h5>
                        <p className='menu-description'>Goat cheese tarts</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h5 className='menu-name'>Palourdes au Gratin</h5 >
                        <p className='menu-description'>Baked clams with garlic butter and bread crumbs</p>
                    </div>
                    <hr></hr>

                </Tab>
                <Tab eventKey="soup" title="Soupe et Salades">
                    <div>
                        <h5 className='menu-name'>Soupe du Jour</h5>
                        <p className='menu-description'>Ask your server for our chef's daily soup selection</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h5 className='menu-name'>Soupe à l'Oignon</h5>
                        <p className='menu-description'>Classic onion soup, made with three types of onions and topped with melted gruyère</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h5 className='menu-name'>Epinards et Concombres à la Grecque</h5>
                        <p className='menu-description'>Spinach salad with feta and yogurt garlic dressing</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h5 className='menu-name'>Salade Niçoise</h5>
                        <p className='menu-description'>Organic greens, flaked tuna, niçoise olives, anchovies, egg, tomatoes and bell peppers</p>
                    </div>
                    <hr></hr>
                    <div>
                        <h5 className='menu-name'>Salade de Canard</h5 >
                        <p className='menu-description'>Roasted duck with orange sherry vinaigrette, pecans, bacon and red onions on seasonal greens</p>
                    </div>
                    <hr></hr>
                </Tab>
                <Tab eventKey="sandwiches" title="Sandwiches" >
                <div>
                <h5 className='menu-name'>Fromage au Jambon</h5>
                <p className='menu-description'>Roasted ham and gruyere with aioli on a baguette</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Poulet</h5>
                <p className='menu-description'>Grilled chicken breast with lemon caper sauce, tomato, lettuce, and gruyere on focaccia</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Turkey Pesto</h5>
                <p className='menu-description'>Thin sliced baked turkey with pickled red onions, lettuce, tomato, and fresh basil pesto on a baguette</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Crêpe Saumon Fumé</h5>
                <p className='menu-description'>Smoked salmon, pickled red onions, and gruyere melted in a housemade buckwheat crepe</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Crêpe Parisian</h5>
                <p className='menu-description'>Thin sliced roasted ham and gruyere in a housemade buckwheat crepe</p>
            </div>
            <hr></hr>
                </Tab>
                <Tab eventKey="entree" title="Entree" >
                <div>
                <h5 className='menu-name'>Poulet à la Moutarde et au Miel</h5>
                <p className='menu-description'>Grilled chicken breast with honey mustard glaze</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Champignon Parmentier au Gratin</h5>
                <p className='menu-description'>Braised portobello mushrooms, topped with mashed potatoes and Gruyere</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Porc à la Dijonnaise</h5 >
                <p className='menu-description'>Sauteed pork tenderloin medallions with an orange compare sauce</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Truite Sauté Sauce Amere</h5 >
                <p className='menu-description'>Sauteed fresh bonless trout with raspberry vinegar butter sauce, tarragon, parsley and shallots</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Brochette d'Agneau a la Greque</h5 >
                <p className='menu-description'>Lamb brochettes with sweet peppers, rucchini and onions with a Greek citrus sauce of fresh rosemary, orange, lime and grapefruit juice</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Pates au Fruits de Mer</h5>
                <p className='menu-description'>Bay scallope, prawns, snow peas and wild mushrooms over egg linguini with a garlic vermouth sauce</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Supreme de Volaille</h5>
                <p className='menu-description'>Boneless chicken breast sauteed in sherry vinegar butter sauce</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Entrecote Grille</h5 >
                <p className='menu-description'>Boneless aged rib eye steak with freshly grated horseradish and sauce Bordelaise</p>
            </div>
            <hr></hr>
                </Tab>
                <Tab eventKey="desserts" title="Desserts" >
                <div>
                <h5 className='menu-name'>Profiterolles</h5 >
                <p className='menu-description'>Chilled cream puffs drizzled with warm chocolate sauce</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Crêpes Suzette</h5 >
                <p className='menu-description'>Fresh crepes with orange, sugar and flambé in Grand Marnier</p>
            </div>
            <hr></hr>
            <div>
                <h5 className='menu-name'>Crême Brulèe à la Vanille</h5 >
                <p className='menu-description'>Traditional vanilla crème brulèe</p>
            </div>
            <hr></hr>
                </Tab>
            </Tabs>
        </div>
    )
}

export default MenuTab
