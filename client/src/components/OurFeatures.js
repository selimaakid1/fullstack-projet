import React from 'react'

const OurFeatures = () => {
    return (

        <div className="features">
            <div>
                <h1 className='featuresTitle'> Le Decor</h1>
            </div>
            <div className='container'>
                
                <div className='row featuresElements'>
                    <div className='col-sm-5 col-md-4 col-lg-4'>
                        <div class="card" >
                            <img class="card-img-top" src="https://www.auberge-de-l-ill.com/media/cache/jadro_resize/rc/y8cI45e31553778663/jadroRoot/medias/593a8ebc60670/593a8f18370d8/bp-auberge-de-l-ill-rest.-004-2.jpg" height='200px' width='200px' alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">La Salle a Manger</h5>
                                <p class="card-text">Légers et voletant, papillons et colibris en origami donnent vie à la magnifique tapisserie.
                                    Le tout comme pour mieux rappeler la puissance éternelle de la Nature.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-5 col-md-4 col-lg-4'>
                        <div class="card" >
                            <img class="card-img-top" src="https://www.auberge-de-l-ill.com/media/cache/jadro_resize/rc/JCOO7VyC1553778664/jadroRoot/medias/59414c48ba312/auberge-de-l-ill-2017-preview-9-.jpg" height='200px' width='200px' alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">La Veranda</h5>
                                <p class="card-text">Entièrement ouverte sur le jardin, la véranda se déploie dans une atmosphère lumineuse et d’une douceur délicate.

                                                        Tout est symbiose avec la Nature. </p>

                            </div>
                        </div>
                    </div>
                    <div className='col-sm-5 col-md-4 col-lg-4'>
                        <div class="card" >
                            <img class="card-img-top" src="https://www.auberge-de-l-ill.com/media/cache/jadro_resize/rc/Nr3YXA3p1553778664/jadroRoot/medias/59414c48ba312/pm01025.jpg" height='200px' width='200px' alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">La Pièce Chaleureuse</h5>
                                <p class="card-text">Ici tout invite à une élégante convivialité. La vaste cheminée rappelle l’âtre d’antan, les oies en bronze la bonne chair.
                        Le rêve n’est pas loin ! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





    )
}

export default OurFeatures